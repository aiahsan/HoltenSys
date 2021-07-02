import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer,LabelProps } from 'recharts';

export function ReferenceLabel(props:any) {
    const { 
        fill, value, textAnchor, 
        fontSize, viewBox, dy, dx,
    } = props;
    const x =  viewBox.x + 20;
    const y = viewBox.y - 6;
    return (
        <>
   
<svg  x={x+450} y={y-45}
        dy={dy}
        dx={dx} width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">

<circle cx="47" cy="47" r="17" fill="white"/>
</g>

<defs>
<filter id="filter0_d" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
<text   x={x+487} y={y+6}
        dy={dy}
        dx={dx}
        fill={fill}
        fontSize={fontSize || 16} 
        textAnchor={textAnchor}>{value}</text>

</>
      
     
    )
}
const data = [
    {
      name: 'January',
      uv: 45,
      pv: 55,
    },
    {
      name: 'February',
      uv: 62,
      pv: 52,
    },
    {
      name: 'March',
      uv: 58,
      pv: 42,
    },
    {
      name: 'April',
      uv: 62,
      pv: 72,
    },
    {
      name: 'May',
      uv:50,
      pv: 70,
    },
    {
      name: 'June',
      uv: 32,
      pv: 45,
    },
    {
      name: 'July',
      uv: 50,
      pv: 60,
    },
    {
      name: 'August',
      uv: 60,
      pv: 70,
    },
    {
      name: 'September',
      uv: 70,
      pv: 55,
    },
    {
      name: 'October',
      uv: 60,
      pv: 70,
    },
    {
      name: 'November',
      uv: 90,
      pv: 85,
    },
    {
      name: 'December',
      uv: 70,
      pv:60,
    },
  ];
  

  export default ()=> {

    return (
<ResponsiveContainer width="99%" aspect={3}>


        <LineChart
        width={1080}
        height={421}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="7 7"  vertical={false}/>
        <XAxis  	fontSize={16} 			tickMargin={16}
 tickLine={false}  axisLine={false} dataKey="name" />
        <YAxis domain={[10, 100]} ticks={[ 10, 20,30,40,50,60,70,80,90,100]}   fontSize={16}  tickMargin={21} tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend type="" verticalAlign="top" align="right" />
        <Line  type="monotone" dataKey="pv" name="Kongkursbo" strokeWidth={3} dot={false} stroke="#2E53DA"  />
        <Line   type="monotone" dataKey="uv" name="Nye Klienter" stroke="#FFAA33" dot={false} strokeWidth={3} />
        {/* <ReferenceLine y={80} label={} stroke="red" strokeWidth={0}  /> */}
        <ReferenceLine y={80}  label={<ReferenceLabel value="24"  />} strokeWidth={0}/> 

      </LineChart>
      </ResponsiveContainer>
      );

  }
  