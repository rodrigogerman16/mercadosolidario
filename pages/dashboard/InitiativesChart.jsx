import React, { PureComponent } from 'react';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const date = new Date()
const day = date.getDay()
console.log(day)

export default class Example extends PureComponent {
  render() {
    const data = [
      {
        name: days.at(day - 2), // Get day of two days ago
        'Iniciativas creadas': this.props.posts && this.props.posts.filter(p => {
          const postDate = new Date(p.date)
          if (postDate.getDay() == (day - 2)) return true
        }).length
      },
      {
        name: 'Ayer',
        'Iniciativas creadas': this.props.posts && this.props.posts.filter(p => {
          const postDate = new Date(p.date)
          if (postDate.getDay() == (day - 1)) return true
        }).length
      },
      {
        name: 'Hoy',
        'Iniciativas creadas': this.props.posts && this.props.posts.filter(p => {
          const postDate = new Date(p.date)
          if (postDate.getDay() == day) return true
        }).length
      },
    ];
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
