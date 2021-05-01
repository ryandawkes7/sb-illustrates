import React from "react";

export const PrimaryBtn = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      className="submit_btn d-flex ml-auto px-4 py-2 cursor-pointer"
    />
  );
};
