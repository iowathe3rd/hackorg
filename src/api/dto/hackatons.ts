import { HackathonStatus } from '@/types';

export interface CreateHackathonDto {
  name: string;

  description: string;

  location: string;

  startDate: Date;

  endDate: Date;

  maxParticipants: number;

  registrationDeadline: Date;

  status?: HackathonStatus;
}

export interface UpdateHackathonDto {
  name?: string;

  description?: string;

  location?: string;

  startDate?: Date;

  endDate?: Date;

  maxParticipants?: number;

  registrationDeadline?: Date;

  status?: HackathonStatus;
}

export interface GetHackathonDto {
  id: string;
}

export interface AddTeamToHackathonDto {
  hackathonId: string;

  teamId: string;
}

export interface RemoveTeamFromHackathonDto {
  hackathonId: string;

  teamId: string;
}
