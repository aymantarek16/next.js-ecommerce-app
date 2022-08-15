import Link from "next/link";
import React from "react";

const Erorr = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        This Page id Not Found 404 Erorr !
      </h1>
      <button
        style={{
          margin: "20px auto",
          display: "block",
          padding: "12px 15px",
          borderRadius: "5px",
          outline: "none",
          border: "none",
          fontWeight: "500",
        }}
      >
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
};

export default Erorr;
