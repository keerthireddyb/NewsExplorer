import React from "react";
//import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

export const NewsGraph = (props) => {
  function genRandomTree(N = 300, reverse = false) {
    //console.log(...Array(N).keys());
    // console.log([...Array(N).keys()]
    // .filter((id) => id)
    // .map((id) => ({
    //   [reverse ? "target" : "source"]: id,
    //   [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
    // })));
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? "target" : "source"]: id,
          [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
        }))
    };
  }
  
  const data={
    "nodes": [
      {
        "id": 1,
        "name": "Andy",
        "gender": "male"
      },
      {
        "id": 2,
        "name": "Betty",
        "gender": "female"
      },
      {
        "id": 3,
        "name": "Cate",
        "gender": "female"
      },
      {
        "id": 4,
        "name": "Dave",
        "gender": "male"
      },
      {
        "id": 5,
        "name": "Ellen",
        "gender": "female"
      },
      {
        "id": 6,
        "name": "Fiona",
        "gender": "female"
      },
      {
        "id": 7,
        "name": "Garry",
        "gender": "male"
      },
      {
        "id": 8,
        "name": "Holly",
        "gender": "female"
      },
      {
        "id": 9,
        "name": "Iris",
        "gender": "female"
      },
      {
        "id": 10,
        "name": "Jane",
        "gender": "female"
      }
    ],
    "links": [
      {
        "source": 1,
        "target": 2
      },
      {
        "source": 1,
        "target": 5
      },
      {
        "source": 1,
        "target": 6
      },
  
      {
        "source": 2,
        "target": 3
      },
      {
        "source": 2,
        "target": 7
      }
    ,
  
      {
        "source": 3,
        "target": 4
      },
      {
        "source": 8,
        "target": 3
      }
    ,
      {
        "source": 4,
        "target": 5
      }
    ,
  
      {
        "source": 4,
        "target": 9
      },
      {
        "source": 5,
        "target": 10
      }
    ]
  } 
  //const data = genRandomTree();
  //console.log(data);
   return (
    <div className="graph-container">  
    <ForceGraph3D
    graphData={data}
    nodeAutoColorBy="group"
    linkDirectionalParticleColor={() => "red"}
    linkDirectionalParticleWidth={6}
    linkHoverPrecision={10}
    onNodeDragEnd={(node) => {
      node.fx = node.x;
      node.fy = node.y;
      node.fz = node.z;
    }}
    width={350}
    height={330}

/>
  </div>
  );
};

