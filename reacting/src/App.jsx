import React, { useState } from "react";
import Card from "./components/Card";
function App() {
  // const [val, setVal] = useState(12)
  const [val, setVal] = useState({name: "Devanshu", isBanned: false});
  return (
    <>
      <Card />
      {/* <div className="px-4">
        <h1 className="text-3xl">{val}</h1>
        <button onClick={()=>setVal((prev)=>prev+1)} className="bg-blue-500 text-white px-3 py-2 rounded-md">Change karo</button>
      </div> */}
      <div className="px-4">
        <h1 className="text-3xl">Name: {val.name}</h1>
        <h1 className="text-3xl">Banned: {val.isBanned.toString()}</h1>
        <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className="bg-blue-500 text-white px-3 py-2 rounded-md">Change karo</button>
      </div>
    </>
  );
}

export default App;
