import React from 'react'

const Card = ({ title, description, location, donacion, donacion2 }) => {
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md">
      <img className="object-cover w-full h-64" src="https://www.le7.info/media/cache/article/uploads/photos/630d9eee64fd3.jpeg" alt="Article" />
      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase ">#Causa1 </span>
          <span className="text-xs font-medium text-blue-600 uppercase ">#Causa2 </span>
          <span className="text-xs font-medium text-blue-600 uppercase ">#Causa3 </span>
          <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline" tabIndex={0} role="link">{title}</a>
          <p className="mt-2 text-sm text-gray-600 ">{description}</p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <span className="mx-1 text-xs text-gray-600">{location}</span>
            <p className="mx-1 text-xs text-gray-600"  >{donacion}</p>
            <p className="mx-1 text-xs text-gray-600"  >{donacion2 ? donacion2 : "" }</p>
          </div>
        </div>
      </div>
    </div>

    /*     <div>
          <h4>{title}</h4>
          <p>{description}</p>
          <span>{location}</span>
          </div> */
  )
}




export default Card