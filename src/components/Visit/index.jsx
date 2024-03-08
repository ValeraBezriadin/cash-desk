"use client";
import React, { useEffect, useState } from "react";
import css from "./style.module.css";
import PopUp from "@/components/Product/PopUp";
import CreateVisit from "./CreateVisit";
import axios from "axios";
import { VISIT_URL } from "@/utils/constans";
import moment from "moment";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Visit = () => {
  const [activePopup, setActivePopup] = useState(false);
  const [visitLoading, setVisitLoading] = useState(false);
  const [visit, setVisit] = useState([]);
  const notify = () =>
    toast.success("Succesfuly delete", {
      position: "bottom-right",
      autoClose: 3000,
      pauseOnHover: false,
    });
  const fetchVisit = async () => {
    try {
      const response = await axios.get(VISIT_URL);
      if (response) {
        setVisit(response.data);
        setVisitLoading(true);
      }
    } catch (error) {
      console.error("Error fetching visit data:", error);
    }
  };
  const handleDelete = async (id) => {
    console.log(visit);
    console.log(visit.id);
    try {
      const response = await axios.delete(`${VISIT_URL}/${id}`);
      if (response) {
        notify();
        fetchVisit();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVisit();
  }, []);

  return (
    <>
      <div className={css.visit}>
        <div className="container">
          <div className={css.wrapper}>
            <nav className={css.nav}>
              <button className={css.btn} onClick={() => setActivePopup(true)}>
                Create visit
              </button>
            </nav>
            <ul className={css.list}>
              <li className={css.item}>
                <span className={css.date}>Date</span>

                <span className={css.purchasePrice}>Purchase price</span>

                <span className={css.sellingPrice}>Selling price</span>

                <span className={css.diffirence}>Diffirence</span>
                <span className={css.delete}>Delete</span>
              </li>
              {visitLoading ? (
                visit.map((i) => (
                  <li key={i.id} className={css.item}>
                    <span className={css.date}>
                      {" "}
                      {moment(i.date).format("DD.MM.YY")}
                    </span>

                    <span className={css.purchasePrice}>
                      {i.products.reduce(
                        (sum, obj) => obj.purchasePrice * obj.count + sum,
                        0
                      )}
                    </span>

                    <span className={css.sellingPrice}>
                      {i.products.reduce(
                        (sum, obj) => obj.sellingPrice * obj.count + sum,
                        0
                      )}
                    </span>

                    <span className={css.diffirence}>
                      {i.products.reduce(
                        (sum, obj) => obj.sellingPrice * obj.count + sum,
                        0
                      ) -
                        i.products.reduce(
                          (sum, obj) => obj.purchasePrice * obj.count + sum,
                          0
                        )}
                    </span>
                    <span className={css.delete}>
                      <button
                        className={css.button}
                        onClick={() => handleDelete(i.id)}
                      >
                        <MdOutlineDeleteOutline size={27} />
                      </button>
                    </span>
                  </li>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <PopUp activePopup={activePopup} setActivePopup={setActivePopup}>
        <CreateVisit fetchVisit={fetchVisit} setActivePopup={setActivePopup} />
      </PopUp>
    </>
  );
};

export default Visit;
