import types from '../../../src/types';
import axios from 'axios';
import BaseAPI from '../base/BaseAPI';

class GetUserService extends BaseAPI {


  async getAllUsers() {
    const response = await axios.get(super.urlCreator(types.apiEndpoints.users));
    return response.data;
  };

  async getUserAdm() {
    const response = await this.getAllUsers();
    let users = response.usuarios;
    for(const user in users) {
      if(users[user].administrador === 'true') {
        return users[user];
      }
    };
  };

  async getUser() {
    const response = await this.getAllUsers();
    let users = response.usuarios;
    for(const user in users) {
      if(users[user].administrador !== 'true') {
        return users[user];
      }
    };
  };

  async getCountUser() {
    const response = await this.getAllUsers();
    let countUsers = response.qunatidades;
    return countUsers
  };

}

export default new GetUserService();