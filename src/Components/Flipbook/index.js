import React from "react";
import HTMLFlipBook from "react-pageflip";
import frontmenu from "../../assets/img/frontmenu.png";
import menu2 from "../../assets/img/menu2.png"
import menu3 from "../../assets/img/menu3.png";
import menu4 from "../../assets/img/menu4.png";
import menu5 from "../../assets/img/menu5.png";
import menu6 from "../../assets/img/menu6.png";
import backmenu from "../../assets/img/backmenu.jpg";


const MenuBook = () => {
  return (
   
    <div className="menu-book d-flex justify-content-center ">
      <HTMLFlipBook width={400} height={500}>
        <div className="page">
     
          {/* <p>This is the first page of the menu.</p> */}
          <img src={frontmenu} width="100% " alt='' />
        </div>
        <div className="page">
     
          {/* <p>This is the second page of the menu.</p> */}
          <img src={menu2} width="100% " alt='' />
        </div>
        <div className="page">
  
          {/* <p>This is the second page of the menu.</p> */}
          <img src={menu3} width="100% " alt='' />
        </div>
        <div className="page">
     
    
          <img src={menu4} width="100% " alt='' />
        </div>
        <div className="page">
   
     
          <img src={menu5} width="100% " alt='' />
        </div>
        <div className="page">
 
          <img src={menu6} width="100% " alt='' />
        </div>
        <div className="page">
 
 <img src={backmenu} width="100% " alt='' />
</div>
        
        {/* Add more pages as needed */}
      </HTMLFlipBook>
    </div>
  );
};

export default MenuBook;
