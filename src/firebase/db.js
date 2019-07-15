import { db } from './firebase';

// User methods ===========================================================
export const doCreateUser = (email, fullName, location, id, payment, token, username) =>
    db.ref(`users/${id}`)
        .set({
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

export const onceGetUsers = () =>
    db.ref('users')
        .once('value');

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
export const createJob = (job, user, uid, cb) => {
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

  db.ref('jobs')
      .push(newJob)
      .then(job => {
        db.ref(`users/${uid}/jobs`)
            .push({
              key: job.key,
              shortName: newJob.shortName,
            });
        cb(true);
      })
      .catch(err => {
        cb(false);
        console.err(err);
      });
};

export const checkDupeJob = (shortName, user, cb) => {
  db.ref('jobs')
      .orderByChild('shortName')
      .equalTo(shortName)
      .once('value', snapshot => {
        if (!snapshot.val()) {
          cb();
        } else if (snapshot.val().username === user) {
          return new Error('That job by that user already exists.');
        }
      })
      .catch(err => err);
};

export const deleteJob = (uid, id, cb) => {
  db.ref(`jobs/${id}`)
      .remove()
      .then(deleted => {
        db.ref(`users/${uid}/jobs/${deleted.key}`)
            .remove()
            .then(() => cb(true))
            .catch(err => cb(err));
      })
      .catch(err => cb(err));
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
      .update({started: true})
      .then(() => cb(true))
      .catch(err => err);
};

