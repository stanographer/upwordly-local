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

export const checkDupeEmail = (email, cb) => {
  db.ref('users')
      .orderByChild('email')
      .equalTo(email)
      .on('value', snapshot => {
        cb(!!snapshot.val());
      });
};

export const checkDupeUsername = (username, cb) => {
  db.ref('users')
      .orderByChild('username')
      .equalTo(username)
      .on('value', snapshot => {
        cb(!!snapshot.val());
      });
};

export const getUser = (uid, cb) => {
  db.ref(`users/${uid}`)
      .once('value', snapshot => {
        cb(snapshot.val());
      })
      .catch(err => {
        cb(err);
      });
};

export const findUser = username => {
  db.ref('users')
      .orderByChild('username')
      .equalTo(username);
};

export const onceGetUsers = () =>
    db.ref('users')
        .once('value');

// Job methods ===========================================================
export const createJob = (job, user, uid) => {
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

export const getAllJobsByUser = (user, cb) => {
  db.ref('jobs')
      .orderByChild('username')
      .equalTo(user)
      .once('value', snapshot => {
        cb(snapshot.val());
      })
      .catch(err => err);
};

