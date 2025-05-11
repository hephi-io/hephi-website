"use client";

import React, { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const isFilled = text.trim() !== "";

  return (
    <textarea
      name="message"
      rows={4}
      className={`w-full lg:mb-4 border border-gray-300 dark:border-[#6C6C6C] rounded-xl lg:p-[24px] p-[16px] placeholder:font-semibold dark:placeholder:text-[#C9C9CA] focus:outline-none focus:bg-blue-50 resize-none lg:max-h-[112px] mb-4 ${
        isFilled ? "bg-blue-50" : "bg-[#f3f3f3] dark:bg-[#333334]"
      }`}
      placeholder="Type your message"
      required
      value={text}
      onChange={handleChange}
    />
  );
}
