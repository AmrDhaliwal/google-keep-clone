import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {2021}</p>
    </footer>
  );
}

export default Footer;
