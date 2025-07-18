import React, { type Ref } from "react";

const Input: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <input
      id={id}
      className='w-[100%] p-2 mr-2 shadow outline outline-black/10'
    />
  );
};

export default Input;
