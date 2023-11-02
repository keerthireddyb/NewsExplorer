import React, { useState } from "react";
//import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { NewsGraph } from "./NewsGraph/NewsGraph";
import { NewsMapNew } from "./NewsMap/NewsMapNew";
import { NewsTopics } from "./NewsTopics/NewsTopics";
import { InsightList } from "./InsightList/InsightList";


import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
//import styles from "newsMain.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const NewsMainNew = (props) => {
    //const {searchNews, setSearchNews}=useState("");
    const {searchDate, setSearchDate}=useState(null);
    const [selectedOption, setSelectedOption] = useState('');
   return (
    <div className="main-container">  
    <header>
        <div className="header-content">
            <div className="header-logo"><span><icon></icon></span><span>NEWS EXPLORER</span></div>
            <form className="search-form">
                <section id="search-name"><label for="category">Search</label></section>
                <select name="category" id="category" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {/* {options.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
                ))} */}
                <option value=""></option>
                <option value="home">Adani Green Energy Limited (AGEL)	</option>
                <option value="food">Adani Power Limited (APL)</option>
                <option value="landscaping">Adani New Industries Limited (ANIL)</option>
                </select>

                <DatePicker placeholder="m/dd/yy" value={searchDate} onChange={value => setSearchDate(value)}/>
            </form>
        </div>	
    </header>
    <section className="main-search">
    </section>
        <div className="CategoryGrid">
            <div className="grid-item scrollable-div"><InsightList /></div>
            <div className="grid-item scrollable-div"><InsightList /></div>
            <div className="grid-item scrollable-div"><InsightList /></div>
            <div className="grid-item scrollable-div"><InsightList /></div>
            <div className="grid-item scrollable-div"><InsightList /></div>
            <div className="grid-item scrollable-div"><InsightList /></div>
        </div>
    <div className="container-slide">
      <Slide easing="ease">
        {/* {slideImages.map((slide, index) => {
          return ( */}
            <div className="slide" style={{justifyContent: "unset",flexDirection: "column"}}>
                <div className="main-graph" style={{marginTop:'15px'}}>
                    {<NewsGraph/>}
                </div>
            </div>
            <div className="slide" style={{justifyContent: "unset",flexDirection: "column"}}>
                <div className="main-map" style={{height:"300px", marginTop:"25px"}}>{<NewsMapNew />}</div>
            </div>
            <div className="slide" style={{justifyContent: "unset",flexDirection: "column"}}>
                <div className="topics" >{<NewsTopics />}</div>
            </div>
          {/* );
        })} */}
      </Slide>
    </div>
    <footer>
    <p>Footer</p>
    </footer>
  </div>
  );
};

