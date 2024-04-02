import React from "react";
import css from "./style.module.css";

const InputVisit = ({ setVisit, i }) => {
  const handleChange = (e, id) => {
    const { value } = e.target;
    console.log("value", value);
    const updatedVisit = { ...i, count: +value || 1 };
    setVisit((prevVisit) =>
      prevVisit.map((item) => (item.id === id ? updatedVisit : item))
    );
  };
  return (
    <label>
      <input
        className={css.right__count}
        type="number"
        value={i.count}
        onChange={(e) => handleChange(e, i.id)}
      />
    </label>
  );
};

export default InputVisit;
