import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bottom-0 py-16 text-center">
      <a
        href="https://is-a.fun"
        target="_blank"
        className="cursor-newtab font-semibold hover:underline"
        rel="noreferrer"
      >
        {new Date().getFullYear()} | L RMN
      </a>
    </footer>
  );
};

export default FooterComponent;
