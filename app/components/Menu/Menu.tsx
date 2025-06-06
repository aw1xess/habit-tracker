import React from "react";
import MenuItem from "../MenuItem/MenuItem";

// TODO Fix bug when pressing theme button
const Menu = () => {
  return (
    <div className="w-full flex justify-between bg-menu-background absolute bottom-0 p-4">
      <MenuItem name="today" path="/"></MenuItem>
      <MenuItem name="habits" path="/habits"></MenuItem>
      <MenuItem name="tasks" path="/tasks"></MenuItem>
      <MenuItem name="timer" path="/timer"></MenuItem>
    </div>
  );
};

export default Menu;
