import React from "react";
import { Link } from "react-router-dom";

//csss
import "./css/_style.scss";

const Page404 = (props) => {
  return (
    <main className="style404">
      <h1>404</h1>
      <p>Səhifə Tapilmadı</p>
      <Link to={"/"}>
          Əsas Səhifəyə qayit
      </Link>
    </main>
  );
};

export default Page404;
