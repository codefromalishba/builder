import React, { useState } from "react";
import CartHeader from "./CartHeader";
import CartMain from "./CartMain";
import CartFooter from "./CartFooter";

const Cart = () => {
  return (
    <div>
      <div className="flex flex-col overflow-y-auto h-[calc(100vh-8.9rem)] custom-scrollbar">
        <CartHeader />
        <CartMain />
      </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
