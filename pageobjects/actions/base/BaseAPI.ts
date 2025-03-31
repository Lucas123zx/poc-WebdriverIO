import 'dotenv/config';

export default class BaseAPI {
  private baseUrl: string;

  constructor() {
   this.baseUrl = String(process.env.BASE_URL_API);
  };

  public urlCreator(path: string, url: string = this.baseUrl) {
    return `${url}${path}`;
  };

}