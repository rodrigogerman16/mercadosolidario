import React, { PureComponent } from 'react';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const data = [
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
  render() {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip wrapperStyle={{ outline: 'none' }} contentStyle={{ background: '#fff', borderRadius: '5px' }} />
          <Area type="monotone" dataKey='Iniciativas creadas' stroke="#ec4899" fill="rgb(251 207 232)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
