

type UserP = {
  id: string;
  name: string;
  email: string;
}



type NewUserPickType = Pick<UserP, 'id'>;
/**
* 
* id: string; 
*/