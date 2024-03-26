"use client";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/assets/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Navigation />
      <h2>Home page in app</h2>
    </>
  );
}
