import { useEffect, useState } from "react";

export default function BinaryBackground() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const generateRow = () =>
      Array.from({ length: 100 }, () => (Math.random() > 0.5 ? "1" : "0")).join("");
    setRows(Array.from({ length: 30 }, generateRow));

    const interval = setInterval(() => {
      setRows((prev) => {
        const newRows = [...prev];
        newRows.shift(); 
        newRows.push(generateRow());
        return newRows;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 text-green-500 opacity-20 font-mono text-sm leading-snug overflow-hidden z-0">
      <div className="animate-scroll h-[200%]">
        {rows.map((row, i) => (
          <div key={i}>{row}</div>
        ))}
      </div>
    </div>
  );
}
