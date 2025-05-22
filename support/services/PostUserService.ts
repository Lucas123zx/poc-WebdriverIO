import types from  '../../src/types';
import axios from 'axios';
import BaseAPI from  './BaseAPI';
import { expect } from 'expect-webdriverio';

interface Body {
  nome: string,
  email: string,
  password: string,
  administrador: string
}

class PostUserService extends BaseAPI {

  async createUser(body: Body) {
    axios.post(super.urlCreator(types.apiEndpoints.users), body).then((response) =>{
      console.log(response.status);
      console.log(response.statusText);
    });
  }


}

export default new PostUserService();
