// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const GraphVisualization = (props) => {
//   const svgRef = useRef(null);
//     const {graph} = props;
//   useEffect(() => {


//     const graphArray = [];
//     const nodeMap = new Map();

//     graph.forEach((nodes, index) => {
//       nodes.forEach((node) => {
//         if (!nodeMap.has(node)) {
//           nodeMap.set(node, { id: node, adjacent: [], name: `${node}` });
//           graphArray.push(nodeMap.get(node));
//         }

//         if (index > 0) {
//           const prevNodes = graph[index - 1];
//           prevNodes.forEach((prevNode) => {
//             if (!nodeMap.get(prevNode).adjacent.includes(node)) {
//               nodeMap.get(prevNode).adjacent.push(node);
//             }
//           });
//         }
//       });
//     });

//     const nodes = graphArray.map((nodeData) => ({
//       id: nodeData.id,
//       adjacent: nodeData.adjacent,
//       name: nodeData.name,
//     }));

//     const links = [];
//     graphArray.forEach((nodeData) => {
//       const source = nodeData.id;
//       nodeData.adjacent.forEach((target) => {
//         const isConnected = nodes.find((node) => node.id === target);
//         if (isConnected) {
//           links.push({ source, target });
//         }
//       });
//     });

//     const svg = d3.select(svgRef.current);
//     const width = svg.node().getBoundingClientRect().width;
//     const height = svg.node().getBoundingClientRect().height;
//     svg.selectAll("*").remove();

//     const rectWidth = 60;
//     const rectHeight = 30;
//     const rectColors = d3.scaleOrdinal(d3.schemeCategory10);

//     const simulation = d3
//       .forceSimulation(nodes)
//       .force("link", d3.forceLink(links).id((d) => d.id))
//       .force("charge", d3.forceManyBody().strength(-200))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collide", d3.forceCollide(rectWidth + 20));

//     const link = svg
//       .selectAll("path")
//       .data(links)
//       .enter()
//       .append("path")
//       .attr("fill", "none")
//       .attr("stroke", "#999")
//       .attr("stroke-width", 2)
//       .attr("marker-end", "url(#arrowhead)")
//       .style("pointer-events", "none");

//     const node = svg
//       .selectAll("rect")
//       .data(nodes)
//       .enter()
//       .append("rect")
//       .attr("width", rectWidth)
//       .attr("height", rectHeight)
//       .attr("rx", 10)
//       .attr("ry", 10)
//       .attr("fill", (d) => rectColors(d.id))
//       .attr("stroke", "#333")
//       .attr("stroke-width", 2);

//     const label = svg
//       .selectAll("text")
//       .data(nodes)
//       .enter()
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("alignment-baseline", "middle")
//       .attr("font-size", 12)
//       .attr("font-weight", "bold")
//       .text((d) => d.name);

//     simulation.on("tick", () => {
//       link.attr("d", (d) => {
//         const sourceX = d.source.x + rectWidth;
//         const sourceY = d.source.y + rectHeight / 2;
//         const targetX = d.target.x;
//         const targetY = d.target.y + rectHeight / 2;

//         return `M${sourceX},${sourceY}L${targetX},${targetY}`;
//       });

//       node.attr("x", (d) => d.x).attr("y", (d) => d.y);

//       label.attr("x", (d) => d.x + rectWidth / 2).attr("y", (d) => d.y + rectHeight / 2);
//     });
//   }, []);

//   return (
//     <div className="fullscreen">
//       <svg ref={svgRef} width="100%" height="80vh">
//         <defs>
//           <marker
//             id="arrowhead"
//             markerWidth="10"
//             markerHeight="7"
//             refX="10"
//             refY="3.5"
//             orient="auto"
//             markerUnits="strokeWidth"
//           >
//             <polygon points="0 0, 10 3.5, 0 7" />
//           </marker>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default GraphVisualization;


import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const GraphVisualization = (props) => {
  const svgRef = useRef(null);
  const {workflow} = props;

  useEffect(() => {
    // const workflow = [
    //   ["START", "IN PROGRESS", "REVIEW", "DONE"],
    //   ["REVIEW", "RESOLVED", "DONE"],
    //   ["DONE", "RE-OPENED", "RE-ASSIGN", "COMPLETED"],
    // ];

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
    const width = window.innerWidth;
    const height = window.innerHeight;
    svg.attr("width", width).attr("height", height);
    svg.selectAll("*").remove();

    const rectWidth = 120;
    const rectHeight = 40;

    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .attr("marker-mid", "url(#arrowhead)")
      .attr("d", (d) => {
        const sourceX = nodes.find((n) => n.id === d.source).x;
        const sourceY = nodes.find((n) => n.id === d.source).y;
        const targetX = nodes.find((n) => n.id === d.target).x;
        const targetY = nodes.find((n) => n.id === d.target).y;

        return `M${sourceX},${sourceY}L${targetX},${targetY}`;
      });

    const linkLabels = svg
      .selectAll(".link-label")
      .data(links)
      .enter()
      .append("text")
      .attr("class", "link-label")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", "#666")
      .attr("x", (d) => {
        const sourceX = nodes.find((n) => n.id === d.source).x;
        const targetX = nodes.find((n) => n.id === d.target).x;
        return (sourceX + targetX) / 2;
      })
      .attr("y", (d) => {
        const sourceY = nodes.find((n) => n.id === d.source).y;
        const targetY = nodes.find((n) => n.id === d.target).y;
        return (sourceY + targetY) / 2;
      })
      .text((d) => d.target);

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

    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id).distance(180))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(rectWidth * 0.2));

    simulation.on("tick", () => {
      link.attr("d", (d) => {
        const sourceX = nodes.find((n) => n.id === d.source).x;
        const sourceY = nodes.find((n) => n.id === d.source).y;
        const targetX = nodes.find((n) => n.id === d.target).x;
        const targetY = nodes.find((n) => n.id === d.target).y;

        return `M${sourceX},${sourceY}L${targetX},${targetY}`;
      });

      linkLabels.attr("x", (d) => {
        const sourceX = nodes.find((n) => n.id === d.source).x;
        const targetX = nodes.find((n) => n.id === d.target).x;
        return (sourceX + targetX) / 2;
      }).attr("y", (d) => {
        const sourceY = nodes.find((n) => n.id === d.source).y;
        const targetY = nodes.find((n) => n.id === d.target).y;
        return (sourceY + targetY) / 2;
      });

      node.attr("x", (d) => d.x - rectWidth / 2).attr("y", (d) => d.y - rectHeight / 2);

      label.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });
  }, []);

  return (
    <svg ref={svgRef}>
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
          <polygon points="0 0, 10 3.5, 0 7" fill="#ccc" />
        </marker>
      </defs>
    </svg>
  );
};

export default GraphVisualization;