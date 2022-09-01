// Type

type TUser = {
  id: number;
  name: string;
}

type TPayment = {
  method: string;
}

// União de types  '&'

type TAccount = TUser & TPayment;



// Interface

interface IUser {
  id: number;
  name: string;
}

interface IPayment {
  method: string;
}

// União de interfaces

interface IAccount extends IUser, IPayment {}