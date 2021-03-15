import React from "react";

interface Props {
  title: string;
  color?: string;
}

export default function Title({ title, color }: Props) {
  return (
    <div
      className={`max-w-xs w-1/2 mx-auto text-4xl font-semibold transform my-gradient -skew-y-2 text-${
        color ? color : ""
      }`}
    >
      <h2>{title}</h2>
    </div>
  );
}
