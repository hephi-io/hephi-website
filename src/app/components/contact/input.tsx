"use client";

import React, { useState } from "react";

interface IProps {
  name: string;
  placeholder: string;
}

export default function Input(props: IProps) {
  const { name, placeholder } = props;

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const isFilled = text.trim() !== "";

  return (
    <input
      type="text"
      name={name}
      className={`w-full border border-gray-300 dark:border-[#6C6C6C] rounded-2xl lg:p-[24px] p-[16px] placeholder:font-semibold dark:placeholder:text-[#C9C9CA] focus:outline-none focus:bg-blue-50 mb-4 sm:w-[48.75%] sm:mb-0 ${
        isFilled ? "bg-blue-50" : "bg-[#EEEEEE] dark:bg-[#333334]"
      }`}
      placeholder={placeholder}
      required
      value={text}
      onChange={handleChange}
    />
  );
}
