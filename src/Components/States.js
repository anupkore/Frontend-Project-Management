export default function getAdjacentStates  (workflow, currentState) {
    const graph = {};

    // Build the graph from the workflow array
    workflow.forEach((row) => {
      for (let i = 1; i < row.length; i++) {
        const prevNode = row[i - 1];
        const currNode = row[i];

        if (!graph[currNode]) {
          graph[currNode] = { prev: [], next: [] };
        }

        if (!graph[prevNode]) {
          graph[prevNode] = { prev: [], next: [] };
        }

        graph[currNode].prev.push(prevNode);
        graph[prevNode].next.push(currNode);
      }
    });

    const previousStates = graph[currentState]?.prev || [];
    const nextStates = graph[currentState]?.next || [];

    return { previousStates, nextStates };
  };
