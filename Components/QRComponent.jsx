import React from 'react';
import QrCodeReader, { QRCode } from 'react-qrcode-reader';

const Qrcode = () => {
  const [val, setVal] = React.useState('');

  const value = (val) => {
    console.log(val.chunks[0].text)
    return 'hola'
  }

  return (
    <div>
      <QrCodeReader delay={5000} width={600} height={500} action={setVal} onRead = {value}/>
      <p>{val} hola</p>
    </div>
  );
};

export default Qrcode;

{/* <label class="block text-sm">Categoria</label>
        <select 
        className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
        value={input.rubro}
        name="rubros"
        onChange={(el) => handleChange(el)}
        >
          <option key = "category">
                Elija una categoria
          </option>
          {rubros.map(rubro => {
            return(
              <option key = {rubro.value} value = {rubro.value}>
                {rubro.label}
              </option>
            )
          })}
        </select> 
      
      const rubros = [
  { value: "Alimentacion", label: "Alimentacion" },
  { value: "Asesoria Legal", label: "Asesoria Legal" },
  { value: "Ayuda_a_refugiados", label: "Ayuda a refugiados" },
  { value: "Ayuda_a_animales", label: "Ayuda a animales" },
  { value: "Apoyo_a_comunidades_indigenas", label: "Apoyo a comunidades indigenas" },
  { value: "Apoyo_a_lgbt", label: "Apoyo a lgbt"},
  { value: "Apoyo_a_la_mujer", label: "Apoyo a la mujer" },
  { value: "Construccion_obras", label: "Construccion obras" },
  { value: "Cultura", label: "Cultura", },
  { value: "Deportes", label: "Deportes", },
  { value: "Derechos_humanos", label: "Derechos humanos" },
  { value: "Discapacitados", label: "Discapacitados" },
  { value: "Educacion", label: "Educacion" },
  { value: "Medio_ambiente", label: "Medio ambiente" },
  { value: "Entretenimiento", label: "Entretenimiento" },
  { value: "Gobierno_no_lucro", label: "Gobierno no lucro" },
  { value: "Materia_prima", label: "Materia prima" },
  { value: "Medios_de_comunicacion", label: "Medios de comunicacion" },
  { value: "Salud_medicina", label: "Salud medicina"},
  { value: "Servicio_comunitario", label: "Servicio comunitario" },
  { value: "Transporte", label: "Transporte"}
]*/}
