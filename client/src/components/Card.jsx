import React from 'react'
import {download} from '../assets'
import {downloadImage} from '../utils'

const Card = ({_id,name,prompt,photo}) => {
  return (
    <div className='rounded-2xl group relative hover:shadow-md hover:shadow-zinc-400'>
      <img 
        className='w-full h-auto object-cover rounded-2xl'
        src={photo}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-dark m-2 p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto prompt'>
          "{prompt}"
        </p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-white flex justify-center items-center text-black text-xs font-bold">
              {name[0]}
            </div>
            <p className='text-blue text-sm'>by {name}</p>
          </div>
          <button type='button' onClick={()=> downloadImage(_id,photo)}
          className='outline-none bg-transparent border-none'>
            <img src={download} alt='download' className='w-6 h-6 object-contain invert'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card