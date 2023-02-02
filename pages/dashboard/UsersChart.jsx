import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  render() {
    const total = (this.props.users + this.props.ong + this.props.company) / 100

    const data = [
      {
        subject: 'Usuarios',
        A: (this.props.users / total).toFixed(2),
      },
      {
        subject: `ONG's`,
        A: (this.props.ong / total).toFixed(2),
      },
      {
        subject: 'Empresas',
        A: (this.props.company / total).toFixed(2),

      }
    ];

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
