import 'dotenv/config';

export default class BaseAPI {

  constructor() {
    this.url = process.env.BASE_URL_API;
  };

  urlCreator(path) {
    return `${this.url}${path}`;
  };

}