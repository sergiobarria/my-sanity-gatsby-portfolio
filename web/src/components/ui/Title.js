import React from "react";

export default function Title({ title, color }) {
  return (
    <div
      className={`max-w-xs w-1/2 mx-auto text-center text-4xl font-medium transform my-gradient -skew-y-2`}
    >
      <h3 className={`text-${color ? color : ""}`}>{title}</h3>
    </div>
  );
}
