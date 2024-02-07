"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Auth from "./components/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut, User as FirebaseAuthUser } from "firebase/auth";
import { app } from "@/app/assets/firebase";
import Hero from "@/app/components/Hero";

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
