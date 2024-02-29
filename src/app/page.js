"use client";

import Auth from "@/components/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut, User as FirebaseAuthUser } from "firebase/auth";
import { app } from "@/assets/firebase";
import Hero from "@/components/Hero";

export default function Home() {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    const isOut = confirm("Do you want exit?");
    if (isOut) {
      signOut(auth);
    }
  };

  if (user) {
    return <Hero />;
  }

  return (
    <>
      <h1>ffdsafasdfasd</h1>
      <Auth />
    </>
  );
}
