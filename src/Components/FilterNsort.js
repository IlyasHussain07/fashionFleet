
import React, { useState } from "react";
import "./FilterNsort.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  return (
    <div className='filterNsort'>
      <div className="filter">
        <div className="bundles">
          <p  onClick={() => {
              setToggle(toggle=> !toggle)
              setToggle1(toggle1=> !true)
              setToggle2(toggle2=>!true)
            
              
              }}>Bundles</p>
          {toggle&&
            <div className='checkboxes' >
              <span className="size_input"><input type="checkbox" /> Single Style</span>
            </div>
          }
        
        </div>
        <div className="bundles">
          <p onClick={() => {
             setToggle1(toggle1 => !toggle1)
             setToggle(toggle =>!true)
             setToggle2(toggle2=>!true)
        }}> Country of Origin</p>
         {toggle1 &&
            <div className='checkboxes'>
              <span className="size_input"><input type="checkbox" /> All Countries</span>
              <span className="size_input"><input type="checkbox" /> India</span>
            </div>
          }
          </div>

       
        <div className="bundles">
          <p onClick={() => 
            {
              setToggle2(toggle2 => !toggle2)
              setToggle1(toggle1=>!true)
              setToggle(toggle=>!true)
                



                }}>
              Size </p>
          {toggle2 &&
            <div className='checkboxes'>
              <span className="size_input"><input type="checkbox" /> L</span>
              <span className="size_input"><input type="checkbox" /> M</span>
              <span className="size_input"><input type="checkbox" /> XL</span>
              <span className="size_input"><input type="checkbox" /> S</span>
              <span className="size_input"><input type="checkbox" />XXL</span>
              <span className="size_input"><input type="checkbox" /> L3</span>
              <span className="size_input"><input type="checkbox" /> Long</span>
            </div>
          }

          

        </div>
      </div>
      <div className='select-box'>
        <span >Sort by:</span>
        <select   onClick={()=>{
           setToggle2(toggle2=>!true)
           setToggle1(toggle1=>!true)
           setToggle(toggle=>!true)

        }} >


          <option  >Recommended</option>
          <option> What's New</option>
          <option> Popularity</option>
          <option> Better Discount</option>
          <option> Price : High to Low</option>
          <option> Price :Low to High</option>



        </select>

      </div>
    </div>
  );
}
