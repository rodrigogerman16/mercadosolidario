import handlerDonaciones from "./handlers";
import filterOrder from "./index";

export const filters = [
  {
    id: "Provincias",
    name: "Provincias",
    options: [
      { value: "Buenos Aires", label: "Buenos Aires", checked: false },
      { value: "Catamarca", label: "Catamarca", checked: false },
      { value: "Chaco", label: "Chaco", checked: false },
      { value: "Chubut", label: "Chubut", checked: false },
      { value: "Cordoba", label: "Córdoba", checked: false },
      { value: "Corrientes", label: "Corrientes", checked: false },
      { value: "Entre Rios", label: "Entre Ríos", checked: false },
      { value: "Formosa", label: "Formosa", checked: false },
      { value: "Jujuy", label: "Jujuy", checked: false },
      { value: "La Pampa", label: "La Pampa", checked: false },
      { value: "La Rioja", label: "La Rioja", checked: false },
      { value: "Mendoza", label: "Mendoza", checked: false },
      { value: "Misiones", label: "Misiones", checked: false },
      { value: "Neuquen", label: "Neuquén", checked: false },
      { value: "Rio Negro", label: "Río Negro", checked: false },
      { value: "Salta", label: "Salta", checked: false },
      { value: "San Juan", label: "San Juan", checked: false },
      { value: "San Luis", label: "San Luis", checked: false },
      { value: "Santa Cruz", label: "Santa Cruz", checked: false },
      { value: "Santa Fe", label: "Santa Fé", checked: false },
      {
        value: "Santiago del Estero",
        label: "Santiago del Estero",
        checked: false,
      },
      {
        value: "Tierra del Fuego",
        label: "Tierra del Fuego",
        checked: false,
      },
      { value: "Tucuman", label: "Tucuman", checked: false },
    ],
  },
  {
    id: "Categorias",
    name: "Categorias",
    options: [
      { value: "Alimentacion", label: "Alimentacion", checked: false },
      { value: "Asesoria Legal", label: "Asesoria Legal", checked: false },
      {
        value: "Ayuda_a_refugiados",
        label: "Ayuda_a_refugiados",
        checked: false,
      },
      {
        value: "Ayuda_a_animales",
        label: "Ayuda_a_animales",
        checked: false,
      },
      {
        value: "Apoyo_a_comunidades_indigenas",
        label: "Apoyo_a_comunidades_indigenas",
        checked: false,
      },
      { value: "Apoyo_a_lgbt", label: "Apoyo_a_lgbt", checked: false },
      {
        value: "Apoyo_a_la_mujer",
        label: "Apoyo_a_la_mujer",
        checked: false,
      },
      {
        value: "Construccion_obras",
        label: "Construccion_obras",
        checked: false,
      },
      { value: "Cultura", label: "Cultura", checked: false },
      { value: "Deportes", label: "Deportes", checked: false },
      {
        value: "Derechos_humanos",
        label: "Derechos_humanos",
        checked: false,
      },
      { value: "Discapacitados", label: "Discapacitados", checked: false },
      { value: "Educacion", label: "Educacion", checked: false },
      { value: "Medio_ambiente", label: "Medio_ambiente", checked: false },
      { value: "Entretenimiento", label: "Entretenimiento", checked: false },
      {
        value: "Gobierno_no_lucro",
        label: "Gobierno_no_lucro",
        checked: false,
      },
      { value: "Materia_prima", label: "Materia_prima", checked: false },
      {
        value: "Medios_de_comunicacion",
        label: "Medios_de_comunicacion",
        checked: false,
      },
      { value: "Salud_medicina", label: "Salud_medicina", checked: false },
      {
        value: "Servicio_comunitario",
        label: "Servicio_comunitario",
        checked: false,
      },
      { value: "Transporte", label: "Transporte", checked: false },
    ],
  },
  {
    id: "Donaciones",
    name: "Donaciones",
    options: [
      {
        value: "efectivo",
        label: "Efectivo",
        checked: false,
        onChange: handlerDonaciones,
      },
      {
        value: "especie",
        label: "Especie",
        checked: false,
        onChange: handlerDonaciones,
      },
      {
        value: "servicio",
        label: "Voluntario",
        checked: false,
        onChange: handlerDonaciones,
      },
    ],
  },
];

export const sortOptions = [
  { name: "Titulo Asc", href: "#", current: false, onClick: filterOrder },
  { name: "Titulo Desc", href: "#", current: false, onClick: filterOrder },
  { name: "Fecha Asc", href: "#", current: false, onClick: filterOrder },
  { name: "Fecha Desc", href: "#", current: false, onClick: filterOrder },
];
