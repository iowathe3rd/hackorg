export interface CreateUserDto {
  clerkId: string;

  username: string;

  email: string;

  fullName: string;

  profilePicture?: string;

  bio?: string;
}

export interface UpdateUserDto {
  username?: string;

  email?: string;

  fullName?: string;

  profilePicture?: string;

  bio?: string;
}

export interface AddUserToHackathonDto {
  userId: string;

  hackathonId: string;
}

export interface RemoveUserFromHackathonDto {
  userId: string;

  hackathonId: string;
}

export interface AddUserToTeamDto {
  userId: string;

  teamId: string;
}

export interface RemoveUserFromTeamDto {
  userId: string;

  teamId: string;
}
