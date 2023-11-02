import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const InsightItem = (props) => (
  <div className="item">
    <div className="display-container">
      <div className="name">
        <a href="" className={`${props.flag === 'S' ? "success" : "danger"}`}>Adani Group reacts to Mahua Moitra 'cash-for-query' row: 'Corroborates our...'</a>
      </div>
    </div>
  </div>
);

export const InsightList = (props) => {
  //console.log(props.insightList);
  const flag="S";

  return (
    <div>
      <div className="container">
      {/* <div className="company-header"><span>Adani Insights</span></div> */}
        <InsightItem flag={flag}/>  
        <InsightItem/>  
        <InsightItem/>  
        <InsightItem/>  
        <InsightItem/>  
        <InsightItem/>  
        <InsightItem/>  
      </div>
    </div>
  );
};

