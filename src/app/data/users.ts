export const users: Array<UserModel> = [
  {
    name: 'Dean',
    surname: 'Bishop',
    age: 21
  },
  {
    name: 'Olivia',
    surname: 'Dunham',
    age: 25
  },
  {
    name: 'Sam',
    surname: 'Bishop',
    age: 27
  },
  {
    name: 'Tika',
    surname: 'Hovhannisyan',
    age: 27
  },
  {
    name: 'Gurgen',
    surname: 'Torosyan',
    age: 78
  }
];

export interface UserModel {
  name: string;
  surname: string;
  age: number;
}
