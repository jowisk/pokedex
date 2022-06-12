import React from 'react'
import imagenSort from '../Images/sort.png'

const Sort = () => {
  return (
    <div>
        <button>
            <img
                className="w-[30px] h-[30px]" 
                src={imagenSort}
            />
        </button>
    </div>
  )
}

export default Sort