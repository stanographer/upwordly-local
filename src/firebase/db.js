import { db } from './firebase';

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

export const onceGetUsers = () =>
    db.ref('users')
        .once('value');