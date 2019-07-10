import { db } from './firebase';

// User methods.
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
      })
};

export const onceGetUsers = () =>
    db.ref('users')
        .once('value');

// Job methods.

export const findJob = shortName => {
  db.ref('jobs')
      .orderByChild('shortName')
      .equalTo(shortName);
};

export const createJob = () => {
  db.ref('jobs')

};