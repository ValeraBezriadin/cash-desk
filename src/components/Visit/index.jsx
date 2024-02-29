"use client";
import React, { useState } from "react";
import css from "./style.module.css";
import PopUp from "@/components/Product/PopUp";
import CreateVisit from "./CreateVisit";

const Visit = () => {
  const [activePopup, setActivePopup] = useState(false);
  return (
    <>
      <div className={css.visit}>
        <div className="container">
          <div className={css.wrapper}>
            <div className={css.nav}>
              <button className={css.btn} onClick={() => setActivePopup(true)}>
                Create visit
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopUp activePopup={activePopup} setActivePopup={setActivePopup}>
        <CreateVisit />
      </PopUp>
    </>
  );
};

export default Visit;
