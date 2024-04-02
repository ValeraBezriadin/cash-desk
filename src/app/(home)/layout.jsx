"use client";
import { app } from "@/assets/firebase";
import Navigation from "@/components/Navigation";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const RootLayout = ({ children }) => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      }
    }
  }, [loading, user]);
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
};

export default RootLayout;
