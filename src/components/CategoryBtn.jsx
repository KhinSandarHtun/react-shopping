import React from "react";

const CategoryBtn = ({ categoryName, current }) => {
  // console.log(props);
  return (
    // <button
    //   className={ ' $ {current ? "bg-black text-white" : "" } border text-nowrap border-black px-4 py-2 me-2'
    //   }
    // >
    <button className={'${current && "bg-black text-white" : " "} border  border-black px-4 py-2 me-2'}>
      {categoryName}
    </button>
  );
};
export default CategoryBtn;
