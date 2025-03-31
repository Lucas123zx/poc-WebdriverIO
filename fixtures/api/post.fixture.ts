
import { Users } from '../../pageobjects/util/Users';

let user = new Users('true');

const dataUserAdmin = {
  "nome": `${user.nome}`,
  "email": `${user.email}`,
  "password": `${user.password}` ,
  "administrador": `${user.administrador}`
};

user = new Users('false');

const dataUser = {
 "nome": `${user.nome}`,
  "email": `${user.email}`,
  "password": `${user.password}` ,
  "administrador": `${user.administrador}`
};


export default {
  dataUserAdmin,
  dataUser,
  
}