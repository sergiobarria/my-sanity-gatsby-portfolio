import React from "react";

interface Props {
  title: string;
  color?: string;
}

export default function Title({ title, color }: Props) {
  return (
    <div
      className={`max-w-xs w-1/2 mx-auto text-center text-4xl font-medium transform my-gradient -skew-y-2`}
    >
      <h2 className={`text-${color ? color : ""}`}>{title}</h2>
    </div>
  );
}
