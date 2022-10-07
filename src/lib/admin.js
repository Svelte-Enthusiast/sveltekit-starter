import { initializeApp } from "firebase-admin/app";
import { getAuth } from 'firebase-admin/auth'
import admin from 'firebase-admin';

// this is the server-side firebase client
export const app = initializeApp({
  credential: admin.credential.cert(
      JSON.parse(import.meta.env.VITE_FIREBASE_SERVICE_ACCOUNT)
  )
});
export const auth = getAuth(app)