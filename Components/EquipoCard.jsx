import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

export default function EquipoCard(props) {
  return (
    <section>
      <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
        <Image
          className="object-cover w-full rounded-full aspect-square"
          src={props.img}
          alt=""
        />

        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
          {props.name}
        </h1>

        <p className="mt-2 text-gray-500 capitalize">Desarrollador FullStack</p>
        
        {/*Link de contacto*/}
        <div className="flex mt-3 -mx-2">
          {/*Link a Github*/}
          <a
            href={props.github}
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500"
            aria-label="Github"
            target="_blank"
            title="Github"
            rel="noreferrer"
          >
            <BsGithub className="w-6 h-6 fill-current" />
          </a>

          {/*Link a Linkedin*/}
          <a
            href={props.linkedin}
            className="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500"
            aria-label="LinkedIn"
            target="_blank"
            title="LinkedIn"
            rel="noreferrer"
          >
            <BsLinkedin className="w-6 h-6 fill-current" />
          </a>
          
          {/*Link al Portfolio */}
          {props.portfolio ? (
            <a
              href={props.portfolio}
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500"
              aria-label="LinkedIn"
              target="_blank"
              title="Portfolio"
              rel="noreferrer"
            >
              <TfiWorld className="w-6 h-6 fill-current" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
