import { db } from './firebase';

// User methods ===========================================================
export const doCreateUser = (
  email,
  fullName,
  location,
  id,
  payment,
  token,
  username,
) =>
  db.ref(`users/${id}`).set({
    email,
    fullName,
    location,
    payment,
    token,
    username,
  });

// Checks in /users for a duplicate email address. Used at sign-up.
export const checkDupeEmail = (email, cb) => {
  db.ref('users')
    .orderByChild('email')
    .equalTo(email)
    .on('value', snapshot => {
      cb(!!snapshot.val());
    });
};

// Checks in /users for a duplicate username. Used at sign-up.
export const checkDupeUsername = (username, cb) => {
  db.ref('users')
    .orderByChild('username')
    .equalTo(username)
    .on('value', snapshot => {
      cb(!!snapshot.val());
    });
};

// Returns user information based on Firebase uid.
export const getUser = (uid, cb) => {
  db.ref(`users/${uid}`)
    .once('value', snapshot => {
      cb(snapshot.val());
    })
    .catch(err => {
      cb(err);
    });
};

// Returns a user object by searching by username.
export const findUser = username => {
  db.ref('users')
    .orderByChild('username')
    .equalTo(username);
};

export const onceGetUsers = () => db.ref('users').once('value');

// Allows jobs to be created as a batch rather than individually.
export const batchCreateJobs = (user, uid, batch, cb) => {
  const lines = batch.split('\n');

  lines.map(entry => {
    const job = {
      shortName: entry.split('::')[0],
      title: entry.split('::')[1],
      speakers: entry.split('::')[2],
    };
    createJob(job, user, uid, cb);
    console.log(user, uid, job);
  });
};

// Job methods ===========================================================

export const createJob = (job, user, uid) => {
  return new Promise((resolve, reject) => {
    const newJob = {
      createdTime: new Date().toUTCString(),
      completedTime: '',
      locked: false,
      shortName: job.shortName.trim().toLowerCase(),
      speakers: !!job.speakers && job.speakers.trim(),
      started: null,
      title: !!job.title && job.title.trim(),
      username: user,
    };

    // First check to make sure a job with the same shortname/user combo
    // does not exist.
    checkDupeJob(newJob.shortName, user)
      // If no dupe found, push the newJob object to db.
      .then(() => {
        db.ref('jobs')
          .push(newJob)
          .then(job => {
            // Assign the job to the user (add it to their user object).
            db.ref(`users/${uid}/jobs`)

              // Use the uuid key Firebase generated for the job and assign it as key.
              .set({
                [job.key]: {
                  shortName: newJob.shortName,
                },
              })
              .then(() => resolve('Job created successfully.'))
              .catch(err => {
                reject('Could not assign job to user.', err);
              });
          })
          .catch(err => {
            reject('Could not push job to the database.', err);
          });
      })
      .catch(err => {
        reject('Duplicate job found. Job shortnames must be unique.', err);
      });
  });
};

// Checks for duplicate jobs (matches by shortname and username).
export const checkDupeJob = (shortName, user) => {
  return new Promise((resolve, reject) => {
    db.ref('jobs')
      .orderByChild('shortName')
      .equalTo(shortName)
      .once('value', snapshot => {
        if (!snapshot.val()) {
          resolve('No existing node was found; everything is good!');
        } else {
          // In Firebase, the first key to a "snapshot," or really "node,"
          // is the unique uuid that it's assigned on creation.
          // Here, I'm using that key to access the actual data inside.
          // Object returned looks like: {xxx: {name: "stanley"}}.
          // const key is getting the "xxx" value.
          const node = snapshot.val();
          const key = Object.keys(node)[0];
          const jobUsername = node[key].username;

          if (user === jobUsername) {
            reject(
              'A job with the same username and shortname combo was found. Do not continue.',
            );
          }
        }
      })
      .catch(err => err);
  });
};

export const deleteJob = (uid, id, cb) => {
  // Delete jobs from the global job list.
  db.ref(`jobs/${id}`)
    .remove()
    .then(() => {
      // Delete the job from the user.
      db.ref(`users/${uid}/jobs/${id}`)
        .remove()
        .then(() => cb(true))
        .catch(err => cb(err));
    })
    .catch(err => cb(err));
};

export const getJobDetails = async (user, job) => {
  await db
    .ref('jobs')
    .orderByChild('username')
    .equalTo(user)
    .once('value', snapshot => {
      console.log(snapshot.key);
    });
};

export const getAllJobsByUser = (user, cb) => {
  db.ref('jobs')
    .orderByChild('username')
    .equalTo(user)
    .once('value', snapshot => {
      cb(snapshot.val());
    })
    .catch(err => err);
};

export const startJob = (id, cb) => {
  db.ref(`jobs/${id}`)
    .update({ started: true })
    .then(() => cb(true))
    .catch(err => err);
};
