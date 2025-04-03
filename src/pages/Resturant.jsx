import React, { useState } from "react";
import Menu from "./menuApi";
// import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Creating a unique list of categories
const uniqueList = [
  ...new Set(Menu.map((curElem) => curElem.category)),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => curElem.category === category);
    setMenuData(updatedList);
  };

  return (
    <>
      {/* <Navbar filterItem={filterItem} menuList={menuList} /> */}
      {/* <MenuCard menuData={menuData} /> */}
      {/* <Footer/> */}
    </>
  );
};

export default Resturant;
