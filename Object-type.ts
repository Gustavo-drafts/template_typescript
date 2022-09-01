/** Criando objeto tipando */

type Point = {
  x: number;
  y: number;
}


function printCoord(points: Point) {
  
  
  console.log(`O eixo x : ${points.x} O eixo y : ${points.y}`)
  
}

printCoord({x: 150, y: 20})



/** Criando objeto tipando */

type User = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean | undefined;
}

// const newUser: User;

// newUser.name;


/* Opcional ? */


let newUser: User = {
  name: 'Rodrigo',
  email: 'rodrigo@email.com',
  age: 18,
  isAdmin: undefined
}