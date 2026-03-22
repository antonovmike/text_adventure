import { useEffect, useState } from "react";
import { getState, makeChoice } from "./api.ts";

interface Option {
  label: string;
  next: string;
}

interface Node {
  id: string;
  branch: string;
  text: string;
  options: Option[];
}

function App() {
  const [node, setNode] = useState<Node | null>(null);

  useEffect(() => {
    getState().then(setNode);
  }, []);

  const handleChoice = async (index: number) => {
    const newNode = await makeChoice(index);
    setNode(newNode);
  };

  if (!node) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <p>{node.text}</p>
      {node.options.map((opt, i) => (
        <li key={i}>
          <button onClick={() => handleChoice(i)}>{opt.label}</button>
        </li>
      ))}
    </div>
  );
}

export default App;
