import React, { useState } from "react";
//import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { NewsGraph } from "./NewsGraph/NewsGraph";
import { NewsMapNew } from "./NewsMap/NewsMapNew";
import { NewsTopics } from "./NewsTopics/NewsTopics";

export const NewsMain = (props) => {
    const {searchNews, setSearchNews}=useState("");
    
   return (
    <div className="main-container">  
    <header>
        <div className="header-content">
            <div className="header-logo"><span><icon></icon></span><span>NEWS EXPLORER</span></div>
            <div className="header-form">
                <span><label>recent news about</label><input type="text" value="" onChange={e => setSearchNews(e.target.value)}  /></span>
                <span><label>as</label><input type="text" value="" /></span>
                <button>investigate</button>
            </div>
        </div>
        <div className="header-content2">
            <div className="header-form2">
                    <span><label>related to</label><input type="text" value="" /></span>
                    <span><label>as</label><input type="text" value="" /></span>
            </div>
        </div>	
    </header>
    <section className="section-div">
        <div className="menu-content">
            <div className="content-header"><span>Insights</span></div>
            <ul>
            <li><a href="#">London</a></li>
            <li><a href="#">Paris</a></li>
            <li><a href="#">Tokyo</a></li>
            </ul>
        </div>
  
        <div className="main-content">
            <div className="content-header"><span>News Network</span></div>
            <div className="main-graph">
                {<NewsGraph/>}
            </div>
        </div>
        <div className="right-content">
            <div className="content-header"><span>Locations</span></div>
            <div className="main-map">{<NewsMapNew />}</div>
            <div className="content-header"><span>Topics</span></div>
            <div className="topics" >{<NewsTopics />}</div>
        </div>
    </section>

    <footer>
    <p>Footer</p>
    </footer>
  </div>
  );
};

