import types from '../../../types';
import axios from 'axios';
import BaseAPI from '../base/BaseAPI';

class GetUserService extends BaseAPI {

  async getAllUsers() {
    const response = await axios.get(super.urlCreator(types.apiEndpoints.users));
    return response.data;
  };

  async getUserAdm() {
    const users = await this.getAllUsers();
    let user = users.usuarios;
    for(const index in user) {
      if(user[index].administrador === 'true') {
        return user[index];
      }
    };
  };

  async getUser() {
    const users = await this.getAllUsers();
    let user = users.usuarios;
    for(const index in user) {
      if(user[index].administrador !== 'true') {
        return user[index];
      }
    };
  };

  async totalCountUser() {
    const users = await this.getAllUsers();
    let countUsers = users.qunatidades;
    return countUsers
  };


}

export default new GetUserService();