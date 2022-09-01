

type User3 = {
  id: string;
  name: string;
  email: string;
}


/**
 * Bloquiea repetição de valores do Objeto
 * */
const user: Readonly<User3> = {
  id: '1',
  name: 'Gustavo',
  email: 'gu@mail.com',
};


