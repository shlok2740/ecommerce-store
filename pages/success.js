import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2> Thank you for the order! </h2>
        <p className="email-msg">Check your email for more information.</p>
        <p className="description">
          If you have any questions, please contact us at
          <a href="mailto:order@example.com">order@example.com</a>
        </p>
        <Link href="/">
          <button type="button" width="100px" className="btn">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
