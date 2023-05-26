import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen min-w-full bg-background flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
