// It is your job to implement this. More info in README

import * as React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';

import colormap from 'colormap';

const N_SHADES = 40;

let colors = colormap({
  colormap: 'jet',
  nshades: N_SHADES,
  format: 'hex',
  alpha: 1,
});

interface IHexProps {
  i: number;
  q: number;
  r: number;
  s: number;
  value: number;
}

const DrawHex: React.FC<IHexProps> = props => {
  const colorIndex = Math.floor(props.value * N_SHADES);
  return (
    <Hexagon
      key={props.i}
      q={props.q}
      r={props.r}
      s={props.s}
      cellStyle={{
        fill: colors[colorIndex],
      }}
      // fill={colors[colorIndex]}
    />
  );
};

interface IGridProps {
  users: {
    department: string;
    failureRate?: number;
  }[];
}

export const Grid: React.FC<IGridProps> = ({ users }) => {
  if (!users) {
    return null;
  }
  let departments = {};
  users.forEach(function(user){
    if(!departments[user.department]){
      departments[user.department] = [];
    }

    if(user.failureRate){
      departments[user.department].push(user.failureRate);
    }
    
    
    
  });
  console.log(departments);

  // departments = {
  //   marketing: [0.23432, 0.234242, 0.827342],
  //   operations: [0.23432, 0.234242, 0.827342]
  // }
  // TODO Implement org based split
  // TODO Shape is pretty weird? and it will brake if data size changes, now it works as 101*114 = 11514
  // const hexagons = GridGenerator.parallelogram(0, 101, 0, 111);
  let length
  const width = 50;
  const area = users.length;

  length = Math.floor(area/width);
  console.log(length);
//change failure rates for each department
  const hexagons = GridGenerator.rectangle(length, width);
  const Hexes = hexagons.map((hex, i) => (
    <DrawHex {...hex} i={i} value={users[i].failureRate} />
  ));
  return (
    <div id="Grid">
      <HexGrid width={1200} height={800} viewBox="0 0 100 100">
        <Layout
          size={{ x: 0.5, y: 0.5 }}
          flat={false}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {Hexes}
        </Layout>
      </HexGrid>
    </div>
  );
};
