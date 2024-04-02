"use client";
import Visit from "@/components/Visit";
import React from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "@/assets/firebase";

const VisitPage = () => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  return <Visit />;
};

export default VisitPage;
