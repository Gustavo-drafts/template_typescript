type User = {
  id: number;
  name: string;
}

type Char = {
  nickname: string;
  level: number;
}

/** '&'  faz a união de tipos  */

type PlayerInfo = User & Char;
let info: PlayerInfo = {
  id: 1,
  name: 'Gustavo',
  nickname: 'gutoo',
  level: 100
}