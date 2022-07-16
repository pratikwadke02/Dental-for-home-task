import React from "react";
import { images } from "../../constants";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="app_navbar">
        <div className="navbar_uppper_container">
          <div className="app_navbar_logo">
            <img src={images.logo} alt="logo" height={80} width={80} />
            <h1>अग्रजन सेवक मीडिया नेटवर्क</h1>
          </div>
          <div className="navbar_right">
          <div className="search_container">
            <label htmlFor="search" style ={{marginRight: "5px"}}>
              <MdLocationOn /> शहर चुनें{" "}
            </label>
            <input
              type="text"
              id="search"
              placeholder="खोजने के लिए यहां टाइप करें"
            />
            <button
              className="search_btn
            "
            >
              <AiOutlineSearch />
            </button>
          </div>
          <div className="add_news">
            <button className="add_news_btn">
              <IoIosAddCircle /> खबरे जोड़ें
            </button>
          </div>
          <div className="profile">
            <button className="profile_btn">Ankush Jain</button>
          </div>
          </div>
        </div>
        <div className="navbar_lower_container">
          <ul className="nav_list">
            <li>होम</li>
            <li>बोर्ड रिजल्ट्स</li>
            <li>न्यूज़ ब्रीफ</li>
            <li>फोटो</li>
            <li>वीडियो</li>
            <li>देश</li>
            <li>राज्य</li>
            <li>क्रिकेट</li>
            <li>मनोरंजन</li>
            <li>करियर</li>
            <li>विदेश</li>
            <li>धर्म</li>
            <li>बिजनेस</li>
            <li>गैजेट्स</li>
            <li>ऑटो</li>
            <li>लाइफस्टाइल</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
