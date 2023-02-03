export let filters = [
    {
        id: "Provincias",
        name: "Provincias",
        options: [
            { value: "BuenosAires", label: "Buenos Aires", checked: false },
            { value: "Catamarca", label: "Catamarca", checked: false },
            { value: "Chaco", label: "Chaco", checked: false },
            { value: "Chubut", label: "Chubut", checked: false },
            { value: "Cordoba", label: "Córdoba", checked: false },
            { value: "Corrientes", label: "Corrientes", checked: false },
            { value: "EntreRios", label: "Entre Ríos", checked: false },
            { value: "Formosa", label: "Formosa", checked: false },
            { value: "Jujuy", label: "Jujuy", checked: false },
            { value: "LaPampa", label: "La Pampa", checked: false },
            { value: "LaRioja", label: "La Rioja", checked: false },
            { value: "Mendoza", label: "Mendoza", checked: false },
            { value: "Misiones", label: "Misiones", checked: false },
            { value: "Neuquen", label: "Neuquén", checked: false },
            { value: "RioNegro", label: "Río Negro", checked: false },
            { value: "Salta", label: "Salta", checked: false },
            { value: "SanJuan", label: "San Juan", checked: false },
            { value: "SanLuis", label: "San Luis", checked: false },
            { value: "SantaCruz", label: "Santa Cruz", checked: false },
            { value: "SantaFe", label: "Santa Fé", checked: false },
            {value: "SantiagoDelEstero",label: "Santiago del Estero", checked: false},
            {value: "TierraDelFuego", label: "Tierra del Fuego",checked: false},
            { value: "Tucuman", label: "Tucumán", checked: false }
        ],
    },
    {
        id: "Insignias",
        name: "Insignias",
        options : [
            { value: "participacion", label: "Participacion", checked: false },
            { value: "servicio", label: "Servicio", checked: false },
            { value: "especie", label: "Especie", checked: false },
            { value: "dinero", label: "Dinero", checked: false },
            // { value: "servicio_bronce", label: "Servicio Bronce", checked: false },
            // { value: "servicio_plata", label: "Servicio plata", checked: false },
            // { value: "servicio_oro", label: "Servicio oro", checked: false },
            // { value: "especie_bronce", label: "Especie bronce", checked: false },
            // { value: "especie_plata", label: "Especie plata", checked: false },
            // { value: "especie_oro", label: "Especie oro", checked: false },
            // { value: "dinero_bronce", label: "Dinero bronce", checked: false },
            // { value: "dinero_plata", label: "Dinero plata", checked: false },
            // { value: "dinero_oro", label: "Dinero oro", checked: false } 
        ]
    },
    {
        id: "Profesiones",
        name: "Profesiones",
        options : [
            { value: "Medico", label: "Medico", checked: false },
            { value: "Ingeniero", label: "Ingeniero", checked: false },
            { value: "Profesor", label: "Profesor", checked: false },
            { value: "Abogado", label: "Abogado", checked: false },
            { value: "Contador", label: "Contador", checked: false },
            { value: "Enfermero", label: "Enfermero", checked: false },
            { value: "Arquitecto", label: "Arquitecto", checked: false },
            { value: "Economista", label: "Economista", checked: false },
            { value: "Dentista", label: "Dentista", checked: false },
            { value: "Veterinario", label: "Veterinario", checked: false },
            { value: "Psicologo", label: "Psicologo", checked: false },
            { value: "Farmaceutico", label: "Farmaceutico", checked: false },
            { value: "Cirujano", label: "Cirujano", checked: false },
            { value: "Optometrista", label: "Optometrista", checked: false },
            { value: "Fisioterapeuta", label: "Fisioterapeuta", checked: false },
            { value: "TerapeutaDelHabla", label: "TerapeutaDelHabla", checked: false },
            { value: "TrabajadorSocial", label: "TrabajadorSocial", checked: false },
            { value: "OficialDePolicía", label: "OficialDePolicía", checked: false },
            { value: "Bombero", label: "Bombero", checked: false },
            { value: "Militar", label: "Militar", checked: false },
            { value: "Otros", label: "Otros", checked: false },
        ]
    }
];

export const sortOptions = [
    { name: "Titulo Asc", href: "#", current: false },
    { name: "Titulo Desc", href: "#", current: false },
    { name: "Fecha Asc", href: "#", current: false },
    { name: "Fecha Desc", href: "#", current: false },
];
