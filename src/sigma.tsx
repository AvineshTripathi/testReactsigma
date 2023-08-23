import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { useLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2";
export const LoadGraph = () => {
  const loadGraph = useLoadGraph();
  const {positions, assign} = useLayoutForceAtlas2()

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", {
      x: 0,
      y: 0,
      size: 15,
      label: "My first node",
      color: "#FA4F40",
    });
    graph.addNode("f", {
      x: 0,
      y: 0,
      size: 15,
      label: "My first node",
      color: "#FA4F40",
    });
    graph.addNode("s", {
      x: 0,
      y: 0,
      size: 15,
      label: "My first node",
      color: "#FA4F40",
    });
    loadGraph(graph);
    assign()
  }, [loadGraph, assign]);

  return null;
};

export const DisplayGraph = () => {
  return (
    <SigmaContainer style={{ height: "500px", width: "500px" }}>
      <LoadGraph />
    </SigmaContainer>
  );
};
