// import React, { useState } from "react";
// import Card from "./components/Card";
// function App() {
//   // const [val, setVal] = useState(12)
//   const [val, setVal] = useState({ name: "Devanshu", isBanned: false });
//   return (
//     <>
//       {/* <div className="px-4">
//         <h1 className="text-3xl">{val}</h1>
//         <button onClick={()=>setVal((prev)=>prev+1)} className="bg-blue-500 text-white px-3 py-2 rounded-md">Change karo</button>
//       </div> */}
//       <div className="px-4 h-screen flex flex-col justify-center bg-slate-500 text-white place-items-center">
//         <h1 className="text-3xl">Name: {val.name}</h1>
//         <h1 className="text-3xl">Banned: {val.isBanned.toString()}</h1>
//         <button
//           onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
//           className={`${
//             val.isBanned ? "bg-blue-600" : "bg-red-600"
//           } text-white px-3 py-2 rounded-md`}
//         >
//           Change karo
//         </button>
//       </div>
//       <Card />
//     </>
//   );
// }

// export default App;
