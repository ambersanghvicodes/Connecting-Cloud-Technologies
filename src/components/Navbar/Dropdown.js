import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        style={{top : props.page === 'home' ? '16vh' : '73px'}}
      >
        <div className="dropdown-flex">
          {MenuItems.map((item, index) => {
            return (
              <div>
                <div className="dropdown-header" key={index}>
                  <Link
                    className={item.cName}
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    // border : 'black 2px solid',
                    // height : '80vh',
                    justifyContent : 'stretch',
                    textAlign : 'center',
                    padding : '1em',
                    justifyItems : 'stretch',
                    color : 'white'
                  }}
                >
                  {item.child.map((citem, cci) => {
                    return <div style={{margin : '0.3em'}}>{citem}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </>
  );
}

export default Dropdown;
