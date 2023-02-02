import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const date = new Date()
const day = date.getDay()

export function getStaticProps() {
  return fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/posts"
  )
    .then((res) => res.json())
    .then((data) => {
      return {
        data
      };
    });
}

const datosF = async () => {
  return await getStaticProps()
}

const datos = datosF()
console.log(datos);

const data = [
  {
    name: days[(days.indexOf(day) - 6 + 7) % 7], // Get day of three days ago
    'Iniciativas creadas': 2780
  },
  {
    name: days[(days.indexOf(day) - 5 + 7) % 7], // Get day of two days ago
    'Iniciativas creadas': 1890
  },
  {
    name: 'Ayer',
    'Iniciativas creadas': 2390
  },
  {
    name: 'Hoy',
    'Iniciativas creadas': 3490,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Tooltip wrapperStyle={{ outline: 'none' }} contentStyle={{ background: 'transparent', borderRadius: '5px' }} />
          <Line type="monotone" dataKey="Iniciativas creadas" stroke="#ec4899" strokeWidth={2} />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
