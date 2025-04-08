import React from 'react'

function Card() {

  const data = [
    {
      name: 'Mahiya Ve',
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam enim quis illo error nihil!",
    },
    {
      name: 'Suneya mai',
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam enim quis illo error nihil!",
    },
  ]

  const handleDownloadClick = () => {alert("chal raha hai")}

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-center gap-4 items-center'>
      {data.map((elem, index)=> (
        <div key={index} className='song w-90 px-3 py-2 bg-zinc-100 rounded'>
        <h3 className='font-semibold text-xl'>{elem.name}</h3>
        <p className='text-xs mt-2'>{elem.description}</p>
        {/* onClick={()=>{alert("chal raha hai")}}  Ese bhi likh skte ha  */}
        <button onClick={handleDownloadClick} className='px-2 py-1 bg-blue-600 text-xs font-semibold text-white rounded mt-3'>Download Now</button>
      </div>
      ))}
    </div>
  )
}

export default Card
