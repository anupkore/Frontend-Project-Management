import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const GraphVisualization = (props) => {
  const svgRef = useRef(null);
    const {graph} = props;
  useEffect(() => {


    const graphArray = [];
    const nodeMap = new Map();

    graph.forEach((nodes, index) => {
      nodes.forEach((node) => {
        if (!nodeMap.has(node)) {
          nodeMap.set(node, { id: node, adjacent: [], name: `${node}` });
          graphArray.push(nodeMap.get(node));
        }

        if (index > 0) {
          const prevNodes = graph[index - 1];
          prevNodes.forEach((prevNode) => {
            if (!nodeMap.get(prevNode).adjacent.includes(node)) {
              nodeMap.get(prevNode).adjacent.push(node);
            }
          });
        }
      });
    });

    const nodes = graphArray.map((nodeData) => ({
      id: nodeData.id,
      adjacent: nodeData.adjacent,
      name: nodeData.name,
    }));

    const links = [];
    graphArray.forEach((nodeData) => {
      const source = nodeData.id;
      nodeData.adjacent.forEach((target) => {
        const isConnected = nodes.find((node) => node.id === target);
        if (isConnected) {
          links.push({ source, target });
        }
      });
    });

    const svg = d3.select(svgRef.current);
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    svg.selectAll("*").remove();

    const rectWidth = 60;
    const rectHeight = 30;
    const rectColors = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(rectWidth + 20));

    const link = svg
      .selectAll("path")
      .data(links)
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#999")
      .attr("stroke-width", 2)
      .attr("marker-end", "url(#arrowhead)")
      .style("pointer-events", "none");

    const node = svg
      .selectAll("rect")
      .data(nodes)
      .enter()
      .append("rect")
      .attr("width", rectWidth)
      .attr("height", rectHeight)
      .attr("rx", 10)
      .attr("ry", 10)
      .attr("fill", (d) => rectColors(d.id))
      .attr("stroke", "#333")
      .attr("stroke-width", 2);

    const label = svg
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-size", 12)
      .attr("font-weight", "bold")
      .text((d) => d.name);

    simulation.on("tick", () => {
      link.attr("d", (d) => {
        const sourceX = d.source.x + rectWidth;
        const sourceY = d.source.y + rectHeight / 2;
        const targetX = d.target.x;
        const targetY = d.target.y + rectHeight / 2;

        return `M${sourceX},${sourceY}L${targetX},${targetY}`;
      });

      node.attr("x", (d) => d.x).attr("y", (d) => d.y);

      label.attr("x", (d) => d.x + rectWidth / 2).attr("y", (d) => d.y + rectHeight / 2);
    });
  }, []);

  return (
    <div className="fullscreen">
      <svg ref={svgRef} width="100%" height="80vh">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default GraphVisualization;
