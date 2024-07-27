import React, { forwardRef, useId } from "react";
import { preprocessCSS } from "vite";

function Select(
  {
    options = [], //options ka array generally liya jayega aisi edge cases me typescript kam aati hai
    label,
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}//kuch print to nahi
      hora but accessibility ke liye acchi practise h
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border
         border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select); //this is another syntax for using forwardref hook
