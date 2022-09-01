


type User = {
  id: string;
  name: string;
  email: string;
}


type NewUserType = Omit<User, 'id'>;
/**
* 
* name: string;
* email: string;
* 
*/