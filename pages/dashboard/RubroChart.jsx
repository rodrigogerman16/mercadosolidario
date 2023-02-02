import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {

  state = {
    data: [
      {
        name: 'Alimentacion',
        val: this.props.posts.filter(p => p.rubro == 'Alimentacion').length,
      },
      {
        name: 'Asesoria_legal',
        val: this.props.posts.filter(p => p.rubro == 'Asesoria_legal').length,
      },
      {
        name: 'Ayuda_a_refugiados',
        val: this.props.posts.filter(p => p.rubro == 'Ayuda_a_refugiados').length,
      },
      {
        name: 'Apoyo_a_comunidades_indigenas',
        val: this.props.posts.filter(p => p.rubro == 'Apoyo_a_comunidades_indigenas').length,
      },
      {
        name: 'Apoyo_a_lgbt',
        val: this.props.posts.filter(p => p.rubro == 'Apoyo_a_lgbt').length,
      },
      {
        name: 'Apoyo_a_la_mujer',
        val: this.props.posts.filter(p => p.rubro == 'Apoyo_a_la_mujer').length,
      },
      {
        name: 'Construccion_obras',
        val: this.props.posts.filter(p => p.rubro == 'Construccion_obras').length,
      },
      {
        name: 'Cultura',
        val: this.props.posts.filter(p => p.rubro == 'Cultura').length,
      },
      {
        name: 'Deportes',
        val: this.props.posts.filter(p => p.rubro == 'Deportes').length,
      },
      {
        name: 'Derechos_humanos',
        val: this.props.posts.filter(p => p.rubro == 'Derechos_humanos').length,
      },
      {
        name: 'Discapacitados',
        val: this.props.posts.filter(p => p.rubro == 'Discapacitados').length,
      },
      {
        name: 'Educacion',
        val: this.props.posts.filter(p => p.rubro == 'Educacion').length,
      },
      {
        name: 'Medio_ambiente',
        val: this.props.posts.filter(p => p.rubro == 'Medio_ambiente').length,
      },
      {
        name: 'Entretenimiento',
        val: this.props.posts.filter(p => p.rubro == 'Entretenimiento').length,
      },
      {
        name: 'Gobierno_no_lucro',
        val: this.props.posts.filter(p => p.rubro == 'Gobierno_no_lucro').length,
      },
      {
        name: 'Materia_prima',
        val: this.props.posts.filter(p => p.rubro == 'Materia_prima').length,
      },
      {
        name: 'Medios_de_comunicacion',
        val: this.props.posts.filter(p => p.rubro == 'Medios_de_comunicacion').length,
      },
      {
        name: 'Salud_medicina',
        val: this.props.posts.filter(p => p.rubro == 'Salud_medicina').length,
      },
      {
        name: 'Servicio_comunitario',
        val: this.props.posts.filter(p => p.rubro == 'Servicio_comunitario').length,
      },
      {
        name: 'Transporte',
        val: this.props.posts.filter(p => p.rubro == 'Transporte').length,
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
