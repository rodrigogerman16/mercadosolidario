import React from 'react'

const Card = ({ title, image, description, location, isVolunteer, expirationDate }) => {

  const dateObj = new Date(expirationDate)
  let month = dateObj.getUTCMonth() + 1
  if (month < 10) month = "0" + month
  let day = dateObj.getUTCDate();
  if (day < 10) day = "0" + day

  return (
    <div className="shadow p-4 rounded-lg bg-white grid gap-2 group">

      <div className="flex justify-center relative rounded overflow-hidden h-52">
        <div className="transition-transform duration-500 transform ease-in-out group-hover:scale-110 w-full h-full">
          <img src={'https://www.derryjournal.com/webimg/TUFZMTMwNjQyMjQ2.jpg?width=1200&enable=upscale'} className="absolute inset-0 rounded object-cover h-full w-full"></img>
        </div>
        <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-1 bg-pink-400 text-sm font-medium text-white select-none">
          {isVolunteer == "servicio" ? "Voluntario" : "Donación"}
        </span>
      </div>

      <h2 className="font-bold text-base md:text-lg text-gray-800 line-clamp-2">
        {title}
      </h2>

      <p className="text-gray-800 line-clamp-4">
        {description}
      </p>

      <div className="flex justify-between">
        <p className="text-gray-500 line-clamp-1">
          {location}
        </p>

        <p className="text-gray-500 line-clamp-1">
          {`${day}/${month}`}
        </p>
      </div>
    </div>
  )
}




export default Card