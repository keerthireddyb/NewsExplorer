import "../../styles/components/newsGraphNew.scss";
import React, { useState, useRef } from "react";

import ForceGraph3D from "react-force-graph-3d";

function genRandomTree(N = 300, reverse = false) {
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

export function NewsGraphNew() {
  const { useRef } = React;

  const data = genRandomTree();
  const distance = 1400;

  const CameraOrbit = () => {
    const fgRef = useRef();

    return (
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        //nodeAutoColorBy="group"
        linkDirectionalParticleColor={() => "red"}
        linkDirectionalParticleWidth={6}
        linkHoverPrecision={10}
        onLinkClick={(link) => fgRef.current.emitParticle(link)}
      />
    );
  };

  return (
    <div className="newsGraph">
      <CameraOrbit />
    </div>
  );
}
