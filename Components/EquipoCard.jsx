import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

export default function EquipoCard(props) {
  return (
    <section>
      <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
        <Image
          class="object-cover w-full rounded-xl aspect-square"
          src={props.img}
          alt=""
        />

        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize">
          {props.name}
        </h1>

        <p class="mt-2 text-gray-500 capitalize">Desarrollador FullStack</p>
        
        {/*Link de contacto*/}
        <div class="flex mt-3 -mx-2">
          {/*Link a Github*/}
          <a
            href={props.github}
            class="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500"
            aria-label="Github"
            target="_blank"
            title="Github"
          >
            <BsGithub class="w-6 h-6 fill-current" />
          </a>

          {/*Link a Linkedin*/}
          <a
            href={props.linkedin}
            class="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500"
            aria-label="LinkedIn"
            target="_blank"
            title="LinkedIn"
          >
            <BsLinkedin class="w-6 h-6 fill-current" />
          </a>
          
          {/*Link al Portfolio */}
          {props.portfolio ? (
            <a
              href={props.portfolio}
              class="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500"
              aria-label="LinkedIn"
              target="_blank"
              title="Portfolio"
            >
              <TfiWorld class="w-6 h-6 fill-current" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
