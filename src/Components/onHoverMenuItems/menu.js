import react from "react";
import "./menu.css"

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';

import MenTippy from "./menTippy";
import WomenTippy from "./womenTippy";
import KidsTippy from "./kidsTippy";
import IndieTippy from "./indie";
import KitchenTippy from "./kitchen";


function menuItem(){
    return(
        
        <div className="mobile">
        <div className="menu__bar" >
        <div className="mobile__viewcat">
       <div className="menu__category" >
       <Tippy content={<MenTippy/> } interactive={true} theme="light"offset={[10, 20]} maxWidth="100%" ><span >MEN</span></Tippy>
        </div> 
             
              
               <div className="menu__category"><Tippy content={<WomenTippy/> } interactive={true} theme="light"offset={[10, 20]} maxWidth="100%"><span >WOMEN</span></Tippy></div>
               <div className="menu__category"><Tippy content={<KidsTippy/> } interactive={true} theme="light"offset={[10, 20]} maxWidth="100%"><span >KIDS</span></Tippy></div>
               <div className="menu__category"><Tippy content={<IndieTippy/> } interactive={true} theme="light"offset={[10, 20]} maxWidth="100%"><span >INDIE</span></Tippy></div>
               </div>
               <div className="mobile__viewcat">
               <div className="menu__category"> <Tippy content={<KitchenTippy/> } interactive={true} theme="light"offset={[10, 20]} maxWidth="100%"><span >HOME AND KITCHEN</span></Tippy></div>
               <div className=" menu__category"> <Tippy content="search"  interactive={true} theme="light"offset={[10, 20]} maxWidth="100%"><input type='search'placeholder="search products"></input></Tippy></div>
               </div>
            </div>
            </div>
        
    )
}

export default menuItem;