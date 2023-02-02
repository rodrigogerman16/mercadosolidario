import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Usuarios',
    A: 45,
  },
  {
    subject: `ONG's`,
    A: 35,
  },
  {
    subject: 'Empresas',
    A: 20,
  }
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Tooltip wrapperStyle={{ outline: 'none' }} contentStyle={{ background: '#fff', borderRadius: '5px' }} />
          <Radar name="Porcentaje" dataKey="A" stroke="#ec4899" fill="rgb(251 207 232)" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
