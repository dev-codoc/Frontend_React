import React, { useState } from "react";

function App() {
  const [value, setValue] = useState([
    { name: "Devanshu", age: 21 },
    { name: "Rahul", age: 22 },
    { name: "Suresh", age: 23 },
  ]);
  return (
    <div className="p-5 text-xl">
      {value.map((item) => (
        <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
        </div>
      ))}
      <button
        onClick={() => setValue(()=>value.map(item => item.name === "Rahul" ? ({name: "Rahul", age: 25}) : item))}
        className="px-3 py-2 rounded-full text-white bg-blue-500"
      >
        CLICK
      </button>
    </div>
  );
}

export default App;
