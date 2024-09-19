import { BaseApi } from './base';
import { HackathonsApi } from './hackatons';
import { TeamsApi } from './teams';
import { UsersApi } from './users';

export class ApiClient extends BaseApi {
  users: UsersApi;
  teams: TeamsApi;
  hackatons: HackathonsApi;

  constructor(baseURL: string) {
    super(baseURL);
    this.users = new UsersApi(baseURL);
    this.teams = new TeamsApi(baseURL);
    this.hackatons = new HackathonsApi(baseURL);
  }
}

const api = new ApiClient('http://localhost:4000');

export default api;
