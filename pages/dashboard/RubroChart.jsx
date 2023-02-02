import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        name: 'Alimentacion',
        val: 4000,
      },
      {
        name: 'Asesoria_legal',
        val: 3000,
      },
      {
        name: 'Ayuda_a_refugiados',
        val: 2000,
      },
      {
        name: 'Apoyo_a_comunidades_indigenas',
        val: 2780,
      },
      {
        name: 'Apoyo_a_lgbt',
        val: 1890,
      },
      {
        name: 'Apoyo_a_la_mujer',
        val: 2390,
      },
      {
        name: 'Construccion_obras',
        val: 3490,
      },
      {
        name: 'Cultura',
        val: 4000,
      },
      {
        name: 'Deportes',
        val: 3000,
      },
      {
        name: 'Derechos_humanos',
        val: 2000,
      },
      {
        name: 'Discapacitados',
        val: 2780,
      },
      {
        name: 'Educacion',
        val: 1890,
      },
      {
        name: 'Medio_ambiente',
        val: 2390,
      },
      {
        name: 'Entretenimiento',
        val: 3490,
      },
      {
        name: 'Gobierno_no_lucro',
        val: 2780,
      },
      {
        name: 'Materia_prima',
        val: 1890,
      },
      {
        name: 'Medios_de_comunicacion',
        val: 2390,
      },
      {
        name: 'Salud_medicina',
        val: 3490,
      },
      {
        name: 'Servicio_comunitario',
        val: 2780,
      },
      {
        name: 'Transporte',
        val: 2000,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="val" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#ec4899' : 'rgb(251 207 232)'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`Iniciativas de "${activeItem.name}": ${activeItem.val}`}</p>
      </div>
    );
  }
}
