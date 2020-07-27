import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return <h1 className="footerLine"> By Timur {date} </h1>;
}

export default Footer;
