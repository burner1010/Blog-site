import React, { useId } from "react";
//here we see practical application of forwardref hook to pass the state as ref to place the component is used
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId;
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white
         text-black outline-none focus:bg-gray-50 
         duration-200 border border-gray-200 
         w-full ${className}`}
         ref = {ref}  //to pass the reference of states where it is used
         {...props}
         id = {id}
      />
    </div>
  );
});

export default Input;
