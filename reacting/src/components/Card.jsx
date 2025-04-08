import React from "react";

export default function Card() {
  const data = [
    {
      image:
        "https://imgs.search.brave.com/AuYOqM-A4Z68Y-MGsKDELFo7gidJM0HhNdzKIGzja8A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ncmF0/aXNvZ3JhcGh5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wMS9ncmF0aXNv/Z3JhcGh5LXR2LWhl/YWQtODAweDUyNS5q/cGc",
      name: "Amazon basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis doloremque, culpa beatae necessitatibus quisquamia facilis m!",
      instock: true
    },
    {
      image:
        "https://imgs.search.brave.com/8ExXYVb8oTB9fWM1IvIH-QRrnpIM5ifHCiXrTuchK-I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw",
      name: "Daily Objexts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis doloremque, culpa beatae necessitatibus quisquamia facilis m!",
      instock: false
    },
    {
      image:
        "https://imgs.search.brave.com/SHYfW9-bN6hNHIdp0QLoM_fCbF5a7EDvk-Xy6V0-ucU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMw/NTA1MTYzODU3L0Fw/cGxlX0lJX1BsdXNf/TXVzZXVtX29mX3Ro/ZV9Nb3ZpbmdfSW1h/Z2UtNjAweDM5OS5q/cGVn",
      name: "Apple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis doloremque, culpa beatae necessitatibus quisquamia facilis m!",
      instock: false
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">
              {elem.description}
            </p>
            <button className={`px-4 py-2 ${elem.instock ? 'bg-blue-600' : 'bg-red-500'} text-xs rounded-md mt-2 text-white`}>{elem.instock ? "In stock":"Out of stock"}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
