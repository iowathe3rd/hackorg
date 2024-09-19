import { Team, User } from '@/types';
import { BaseApi } from './base';
import { CreateTeamDto, UpdateTeamDto } from './dto/teams';

export class TeamsApi extends BaseApi {
  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    return this.post<Team>('/teams', createTeamDto);
  }

  async findAll(): Promise<Team[]> {
    return this.get<Team[]>('/teams');
  }

  async findOne(id: string): Promise<Team> {
    return this.get<Team>(`/teams/${id}`);
  }

  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    return this.patch<Team>(`/teams/${id}`, updateTeamDto);
  }

  async remove(id: string): Promise<Team> {
    return this.delete<Team>(`/teams/${id}`);
  }

  async addMemberToTeam(teamId: string, userId: string): Promise<void> {
    return this.post(`/teams/${teamId}/members/${userId}`);
  }

  async removeMemberFromTeam(teamId: string, userId: string): Promise<void> {
    return this.delete(`/teams/${teamId}/members/${userId}`);
  }

  async getMembers(teamId: string): Promise<User[]> {
    return this.get<User[]>(`/teams/${teamId}/members`);
  }

  async getTeamsForUser(userId: string): Promise<Team[]> {
    return this.get<Team[]>(`/teams/users/${userId}/teams`);
  }
}
