import axios from 'axios';
import 'dotenv/config';
import types from '../../../types';

class GetUserService {

  async getAllUsers() {
    const response = await axios.get(`${process.env.BASE_URL_API}${types.apiEndpoints.users}`)
    return response.data;
  };

  async getUser() {
    const users = await this.getAllUsers();
    let user = users.usuarios;
    for(const index in user) {
      if(user[index].administrador === 'true') {
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