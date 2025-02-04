import React from "react";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const { allFeatures } = useSelector((state) => state.feature);
  return (
    <div className="flex items-center px-5 py-3 gap-2">
      <p className="text-xl">
        {allFeatures?.length === 1 ? "Selected Feature" : "Selected Features"}
      </p>
      <p className="text-xl">{allFeatures?.length}</p>
    </div>
  );
};

export default CartHeader;
