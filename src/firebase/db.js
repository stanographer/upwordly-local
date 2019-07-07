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

export const onceGetUsers = () =>
    db.ref('users')
        .once('value');