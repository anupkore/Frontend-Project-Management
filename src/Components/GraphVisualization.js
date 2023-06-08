import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const GraphVisualization = (props) => {
  const svgRef = useRef(null);
  const { workflow } = props;

  useEffect(() => {
    const nodes = [];
    const links = [];

    workflow.forEach((row, rowIndex) => {
      row.forEach((node, nodeIndex) => {
        if (!nodes.find((n) => n.id === node)) {
          nodes.push({
            id: node,
            x: nodeIndex * 180 + 120,
            y: rowIndex * 120 + 100,
          });
        }

        if (nodeIndex < row.length - 1) {
          links.push({
            source: node,
            target: row[nodeIndex + 1],
          });
        }
      });
    });

    const svg = d3.select(svgRef.current);
    const rectWidth = 120;
    const rectHeight = 40;

    const width = d3.max(nodes, (d) => d.x + rectWidth / 2) + 20;
    const height = d3.max(nodes, (d) => d.y + rectHeight / 2) + 20;

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .attr("d", (d) => {
        const sourceX = nodes.find((n) => n.id === d.source).x;
        const sourceY = nodes.find((n) => n.id === d.source).y;
        const targetX = nodes.find((n) => n.id === d.target).x;
        const targetY = nodes.find((n) => n.id === d.target).y;

        return `M${sourceX},${sourceY}L${targetX},${targetY}`;
      });

      // const linkLabels = svg
      // .selectAll(".link-label")
      // .data(links)
      // .enter()
      // .append("text")
      // .attr("class", "link-label")
      // .attr("font-size", 10)
      // .attr("text-anchor", "middle")
      // .attr("alignment-baseline", "middle")
      // .attr("fill", "#666")
      // .attr("x", (d) => {
      //   const sourceX = nodes.find((n) => n.id === d.source).x;
      //   const targetX = nodes.find((n) => n.id === d.target).x;
      //   return (sourceX + targetX) / 2;
      // })
      // .attr("y", (d) => {
      //   const sourceY = nodes.find((n) => n.id === d.source).y;
      //   const targetY = nodes.find((n) => n.id === d.target).y;
      //   return (sourceY + targetY) / 2;
      // })
      // .text((d) => d.target);

      

    const node = svg
      .selectAll("rect")
      .data(nodes)
      .enter()
      .append("rect")
      .attr("x", (d) => d.x - rectWidth / 2)
      .attr("y", (d) => d.y - rectHeight / 2)
      .attr("width", rectWidth)
      .attr("height", rectHeight)
      .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
      .attr("stroke", "#333")
      .attr("stroke-width", 2)
      .attr("rx", 10)
      .attr("ry", 10);

    const label = svg
      .selectAll(".node-label")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "node-label")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-size", 12)
      .attr("fill", "#fff")
      .text((d) => d.id);

      const linkArrowheads = svg
      .selectAll(".link-arrowhead")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link-arrowhead")
      .attr("fill", "#ccc")
      .attr("d", "M0,-8L8,0L0,8Z")
      .attr("transform", (d) => {
        const sourceX = nodes.find((n) => n.id === d.source).x;
        const sourceY = nodes.find((n) => n.id === d.source).y;
        const targetX = nodes.find((n) => n.id === d.target).x;
        const targetY = nodes.find((n) => n.id === d.target).y;
    
        // Calculate the angle between the source and target nodes
        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
        // Calculate the distance from the source node to the midpoint of the link
        const distance = Math.sqrt(dx * dx + dy * dy);
        const offset = 20; // Adjust this value to control the offset distance
    
        // Calculate the adjusted midpoint coordinates
        const midpointX = sourceX + (dx / 2);
        const midpointY = sourceY + (dy / 2);
    
        // Calculate the final position of the arrowhead
        const arrowheadX = midpointX + (offset / distance) * dx;
        const arrowheadY = midpointY + (offset / distance) * dy;
    
        // Translate the arrowhead to the adjusted position and rotate it towards the target node
        return `translate(${arrowheadX},${arrowheadY}) rotate(${angle})`;
      });
    
    
  }, [workflow]);

  return <svg ref={svgRef}></svg>;
};

export default GraphVisualization;



