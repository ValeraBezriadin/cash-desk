import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_API_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_API_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_API_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_API_APP_ID,
};

export const app = initializeApp(firebaseConfig);
