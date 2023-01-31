import React from 'react'

const index = () => {
  return (
    <div className='grid grid-cols-1 items-start max-w-7xl p-8 m-auto gap-8'>
      <div class="mx-auto max-w-xs text-center">
        <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">FAQ</span>
        <h2 className="text-5xl font-bold text-center">Preguntas frecuentes</h2>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
        </div>
      </div>

      <div className="space-y-4">

        <details className="group border-l-4 border-pink-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900">
              ¿Que es Mercado Solidario?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            Mercado Solidario en una app, donde se realizan match&apos;s entre ONG ́s,
            voluntarios y donantes. Y a su vez identificar los usuarios con talentos
            espirituales para las compañías “Great Place to Work”.
          </p>
        </details>

        <details className="group border-l-4 border-pink-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900">
              ¿Como puedo hacer donaciones?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            primero deberás entrar a la sección &quot;Iniciativas&quot; y seleccionando la causa que mas te guste, una vez dentro podrás donar mediante paypal.
          </p>
        </details>

        <details className="group border-l-4 border-pink-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900">
              Deseo denunciar un fraude, abuso o irregularidad. ¿A quién puedo contactar?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            Dentro de cada iniciativa hay un botón para reportar el post. Una vez denunciado, nuestro equipo se encargara de analizar la situación.
          </p>
        </details>

        <details className="group border-l-4 border-pink-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900">
              ¿Como funciona el sistema de suscripciones?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            Mediante el sistema de suscripciones podrás donar mensualmente a una causa. Todos los meses recibirás información tu mail con información de la iniciativa apoyada.
          </p>
        </details>

        <details className="group border-l-4 border-pink-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900">
              ¿Puedo cancelar mi suscripción?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            ¡Si! Las suscripciones son mensuales y se pueden cancelar en cualquier momento desde el panel de configuración de tu cuenta.
          </p>
        </details>

      </div>
    </div>
  )
}

export default index