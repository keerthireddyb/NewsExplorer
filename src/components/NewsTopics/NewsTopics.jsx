import "d3-transition";
import { select } from "d3-selection";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import words from "./words";

export const NewsTopics = (props) => {
    const resizeStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop:"38px"
        //border: "solid 1px #ddd",
        //background: "#f0f0f0"
      };
      const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
      };
    function getCallback(callback) {
        return function (word, event) {
          const isActive = callback !== "onWordMouseOut";
          const element = event.target;
          const text = select(element);
          text
            .on("click", () => {
              if (isActive) {
                window.open(`https://duckduckgo.com/?q=${word.text}`, "_blank");
              }
            })
            .transition()
            .attr("background", "white")
            .attr("font-size", isActive ? "100%" : "50%")
            .attr("text-decoration", isActive ? "underline" : "none");
        };
      }
      
      const callbacks = {
        //getWordColor: (word) => (word.value > 50 ? "orange" : "purple"),
        getWordTooltip: (word) =>
          `The word "${word.text}" appears ${word.value} times.`,
        onWordClick: getCallback("onWordClick"),
        onWordMouseOut: getCallback("onWordMouseOut"),
        onWordMouseOver: getCallback("onWordMouseOver")
      };
  return (
    <div>
        <Resizable
        defaultSize={{
          width: 313,
          height: 240
        }}
        style={resizeStyle}
      >
      <div style={{ height: 300, width: 380 }}>
        <ReactWordcloud callbacks={callbacks} words={words} options={options}/>
      </div>
      </Resizable>
    </div>
  );
}

