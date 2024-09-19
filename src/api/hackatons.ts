import { Hackathon, Team, User } from '@/types';
import { CreateHackathonDto, UpdateHackathonDto } from './dto/hackatons';
import { BaseApi } from './base';

export class HackathonsApi extends BaseApi {
  async create(createHackathonDto: CreateHackathonDto): Promise<Hackathon> {
    return this.post<Hackathon>('/hackathons', createHackathonDto);
  }

  async update(
    id: string,
    updateHackathonDto: UpdateHackathonDto
  ): Promise<Hackathon> {
    return this.patch<Hackathon>(`/hackathons/${id}`, updateHackathonDto);
  }

  async addTeamToHackathon(hackathonId: string, teamId: string): Promise<void> {
    return this.post(`/hackathons/${hackathonId}/teams/${teamId}`);
  }

  async removeTeamFromHackathon(
    hackathonId: string,
    teamId: string
  ): Promise<void> {
    return this.delete(`/hackathons/${hackathonId}/teams/${teamId}`);
  }

  async getParticipants(hackathonId: string): Promise<User[]> {
    return this.get<User[]>(`/hackathons/${hackathonId}/participants`);
  }

  async getTeams(hackathonId: string): Promise<Team[]> {
    return this.get<Team[]>(`/hackathons/${hackathonId}/teams`);
  }

  async getAllHackathons(): Promise<Hackathon[]> {
    return this.get<Hackathon[]>('/hackathons');
  }

  async getHackathon(id: string): Promise<Hackathon> {
    return this.get<Hackathon>(`/hackathons/${id}`);
  }
}
