import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - الصفحة غير موجودة</h2>
      <p>يبدو أنك وصلت إلى صفحة غير موجودة.</p>
      <Link to="/">العودة إلى الصفحة الرئيسية</Link>
    </div>
  );
};

export default NotFound;
