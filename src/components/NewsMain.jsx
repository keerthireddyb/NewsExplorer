import React, { useState, useEffect,useReducer } from "react";
//import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { NewsGraph } from "./NewsGraph/NewsGraph";
import { NewsMapNew } from "./NewsMap/NewsMapNew";
import { NewsTopics } from "./NewsTopics/NewsTopics";
import { InsightList } from "./InsightList/InsightList";
import * as xlsx from 'xlsx';

import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import NewsDataReducer from "../redux/reducers/NewsDataReducer";
const initialState = "unloaded";

// function reducer(state, action) {
//   switch (action.type) {
//     case 'load':
//       return "loaded";
//     default:
//       return state;
//   }
// }
export const NewsMain = (props) => {
    //const {searchNews, setSearchNews}=useState("");
    const [searchDate, setSearchDate]=useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const [insightListState, setInsightListState]=useState("");
    
    const unhovered = e => e.currentTarget.classList.add("unhovered");
    const hovered = e => e.currentTarget.classList.remove("unhovered");

    const [state, dispatch] = useReducer(NewsDataReducer, initialState);
    //read xlsx

    const fetchData = async () => {
        try {
        let response = await fetch("/adaniTextFiles.xlsx");
        let json = await response.arrayBuffer();
        return { success: true, data: json };
        } catch (error) {
        console.log(error);
        return { success: false };
        }
    }  
    useEffect(() => {
        (async () => {
            if (state==="unloaded"){
                let res = await fetchData();
                if (res.success) {
                const wb = xlsx.read(res.data, { type: "array" });
                //console.log(wb);
                const sheetName = wb.SheetNames[0];
                const worksheet = wb.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                
                let insightList= json.map((item)=>{
                    return{
                        id:item.__EMPTY,
                        companyName:item.organisationNames,
                        insight:item.keyPhrases,
                        SA: item.sentimentAnalysis
                    }
                });
                setInsightListState(insightList);
                //console.log(insightListState);
                dispatch({type:'INSIGHT_API_SUCCESS',insightList});
                }
            
            }else if( state==="loaded") {
                    
            }
        
        })()
    });



        //const dispatch = useDispatch();
    //const {insightList,graphList,mapList,topicList} = useSelector(state => state);
    //useEffect(() => { 
    //     dispatch(getInsightLists());
    //   dispatch(getGraphLists());
    //   dispatch(getMapLists());
    //   dispatch(getTopicLists());
    //  }, []);
    function onSearch(e){
        //console.log(e);
    // dispatch(getInsightLists(e.target.value));
    }
   return (
    <div className="main-container">  
    <header>
        <div className="header-content">
            <div className="header-logo"><span><icon></icon></span><span>NEWS EXPLORER</span></div>
            <form className="search-form">
                <section id="search-name"><label for="category">Insight Search</label></section>
                <select name="category" id="category" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {/* {options.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
                ))} */}
                <option value=""></option>
                <option value="home">Adani Enterprises	</option>
                <option value="food">Adani Green Energy</option>
                <option value="landscaping">Adani Ports & SEZ</option>
                <option value="landscaping">Adani Transmission</option>
                <option value="landscaping">Adani Total Gas</option>
                <option value="landscaping">Adani Power</option>
                <option value="landscaping">Ambuja Cements and ACC</option>
                <option value="landscaping">Adani wilmar</option>
                <option value="landscaping">Others (Unlisted)</option>
                </select>

                <DatePicker placeholder="m/dd/yy" value={searchDate} onChange={value => setSearchDate(value)}/>
                <button className="search-button" onMouseEnter={hovered} onMouseLeave={unhovered} onClick={onSearch()}>
                    <span className="button-text">Search</span>
                </button>
            </form>
        </div>	
    </header>
    <section className="main-search">
    </section>
        <div className="CategoryGrid">
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Adani Enterprises</span></div>
                    <InsightList insightList={insightListState}/>
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Adani Green Energy</span></div>
                    <InsightList />
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Adani Ports & SEZ</span></div>
                    <InsightList />
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Adani Transmission</span></div>
                    <InsightList />
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Adani Total Gas</span></div>
                    <InsightList />
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Adani Power</span></div>
                    <InsightList />
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Ambuja Cements and ACC</span></div>
                    <InsightList />
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Adani wilmar</span></div>
                    <InsightList />
            </div>
            <div className="grid-item scrollable-div">
                <div className="company-header"><span>Others (Unlisted)</span></div>
                    <InsightList />
            </div>
            <div className="grid-item" style={{justifyContent:"unset",flexDirection:"column"}}>
                <div className="content-header"><span>News Network</span></div>
                <div className="main-graph" style={{marginTop:'15px'}}>
                    {<NewsGraph/>}
                </div>
            </div>
            <div className="grid-item" style={{justifyContent: "unset",flexDirection: "column"}}>
                <div className="content-header"><span>Locations</span></div>
                <div className="main-map" style={{height:"300px", marginTop:"25px"}}>{<NewsMapNew />}</div>
            </div>
            <div className="grid-item" style={{justifyContent: "unset",flexDirection: "column"}}>
                <div className="content-header"><span>Topics</span></div>
                <div className="topics" >{<NewsTopics />}</div>
            </div>
        </div>
{/* 
        <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3>Businesses</h3>
            <li><a href="#">Sectors</a></li>
            <li><a href="#">Energy and Utilities</a></li>
            <li><a href="#">Transportation and Logistics</a></li>
            <li><a href="#">Incubation</a></li>
            <li><a href="#">Others</a></li>
          </ul>

          <ul>
            <h3>Sustainability</h3>
            <li><a href="#">Communities</a></li>
            <li><a href="#">Environment</a></li>
            <li><a href="#">Safety First</a></li>
            <li><a href="#">Waste Management</a></li>
            <li><a href="#">Water Management</a></li>
            <li><a href="#">Operational Efficiency</a></li>
          </ul>

          <ul>
            <li><h3><a href="#">About Us</a></h3></li>
            <li><h3><a href="#">Careers</a></h3></li>
            <li><h3><a href="#">Blogs</a></h3></li>
            <li><h3><a href="#">Sports</a></h3></li>
          </ul>
        </div>
      </div>
      <div className="social">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className="info">
        <div className="legal">
          <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
        </div>
        <div className="copyright">2021 Copyright &copy; Sean B</div>
      </div>
    </footer> */}
  </div>
  );
};

