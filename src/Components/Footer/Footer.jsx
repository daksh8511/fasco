import React from "react";

const Footer = () => {
  return (
    <footer className="border-t container p-6">
      <div className="block min-md:flex justify-between mb-8">
        <h2 className="!font-mydisplay text-[var(--gray-color)] text-3xl text-center">
          FASCO
        </h2>
        <ul className="gap-10 text-center mt-5 min-md:flex min-md:mt-0">
          <li>Support Center</li>
          <li>Invocing</li>
          <li>Contract</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
      </div>
      <span className="flex justify-center text-center">
        Copyright © 2022 Xpro . All Rights Reseved.
      </span>
    </footer>
  );
};

export default Footer;
