import { auth } from './firebase';

// Create new user.
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign-in.
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign-out.
export const doSignOut = () =>
    auth.signOut();

// Password reset.
export const doPasswordReset = email =>
    auth.sendPasswordResetEmail(email);

// Password update.
export const doPasswordUpdate = password =>
    auth.currentUser.updatePassword(password);
