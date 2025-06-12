import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  return (
    <div className="w-full flex justify-between bg-menu-background fixed bottom-0 p-4">
      <MenuItem name="today" path="/"></MenuItem>
      <MenuItem name="habits" path="/habits"></MenuItem>
      <MenuItem name="tasks" path="/tasks"></MenuItem>
      <MenuItem name="timer" path="/timer"></MenuItem>
    </div>
  );
};

export default Menu;
