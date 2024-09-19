import { User } from '@/types';
import { BaseApi } from './base';
import { CreateUserDto, UpdateUserDto } from './dto/users';

export class UsersApi extends BaseApi {
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.post<User>('/users', createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.get<User[]>('/users');
  }

  async findOne(id: string): Promise<User> {
    return this.get<User>(`/users/${id}`);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.patch<User>(`/users/${id}`, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    return this.delete(`/users/${id}`);
  }

  async addUserToHackathon(userId: string, hackathonId: string): Promise<void> {
    return this.post(`/users/${userId}/hackathons/${hackathonId}`);
  }

  async removeUserFromHackathon(
    userId: string,
    hackathonId: string
  ): Promise<void> {
    return this.delete(`/users/${userId}/hackathons/${hackathonId}`);
  }

  async addUserToTeam(userId: string, teamId: string): Promise<void> {
    return this.post(`/users/${userId}/teams/${teamId}`);
  }

  async removeUserFromTeam(userId: string, teamId: string): Promise<void> {
    return this.delete(`/users/${userId}/teams/${teamId}`);
  }
}
