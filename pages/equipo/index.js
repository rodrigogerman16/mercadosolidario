import EquipoCard from "../../Components/EquipoCard";
import bauti from "../../Assets/bauti.png";
import gusti from "../../Assets/gusti.jpg";
import rodri from "../../Assets/rodri.png";
import fabi from "../../Assets/Fabi.png";
import frank from "../../Assets/frank.png";
import facu from "../../Assets/facu.jpg";
import JoseH from "../../Assets/JoseH.jpg";
import juli from "../../Assets/juli.png";
export default function Equipo() {
  return (
    <div>
      <div>
        <div class="container px-6 pt-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Nuestro Equipo
          </h1>

          <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-pink-400 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-pink-400 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-pink-400 rounded-full"></span>
          </div>
        </div>
      </div>

      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          <EquipoCard
            name="Bautista Pietraroia"
            img={bauti}
            github="https://github.com/bautipietra"
            linkedin="https://www.linkedin.com/in/bautista-pietraroia/"
            portfolio="https://www.bautistapietraroia.com.ar/"
          />

          <EquipoCard
            name="Rodrigo German"
            img={rodri}
            github="https://github.com/rodrigogerman16"
            linkedin="https://www.linkedin.com/in/rodrigo-german-8408a5127/"
            portfolio="https://portfolio-pi-taupe-46.vercel.app/"
          />

          <EquipoCard
            name="Fabian Carabajal"
            img={fabi}
            github="https://github.com/Fabio1501"
            linkedin="https://www.linkedin.com/in/fabian-carabajal-890450249/"
          />

          <EquipoCard
            name="Jose Hernandez"
            img={JoseH}
            github="https://github.com/Delwin183"
            linkedin="https://www.linkedin.com/in/delwin-hernandez-b926182b"
          />

          <EquipoCard
            name="Julián López Padua"
            img={juli}
            github="https://github.com/juliilp"
            linkedin="https://www.linkedin.com/in/julian-lopez-7b9746234/"
          />

          <EquipoCard
            name="Facundo Alonso"
            img={facu}
            github="https://github.com/faka02"
            linkedin="https://www.linkedin.com/in/facundo-alonso-233b50241"
          />

          <EquipoCard
            name="Frank Camarena"
            img={frank}
            github="https://github.com/f10frank"
            linkedin="https://www.linkedin.com/in/frank-gustavo-camarena-5b5a1a127/"
          />

          <EquipoCard
            name="Gustavo Ramos"
            img={gusti}
            github="https://github.com/RamosGustavo"
            linkedin="https://www.linkedin.com/in/gustavo-ramos-full-stack/"
            portfolio="https://full-stack-ramos-gustavo.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}
