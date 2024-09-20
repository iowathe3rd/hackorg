export interface CreateTeamDto {
  name: string;
  description?: string;
}

export interface UpdateTeamDto {
  name?: string;
}

export interface GetTeamDto {
  id: string;
  name: string;
  teamWins?: number;
  personalWins?: number;
}

export interface AddMemberToTeamDto {
  teamId: string;
  userId: string;
}

export interface RemoveMemberFromTeamDto {
  teamId: string;
  userId: string;
}
