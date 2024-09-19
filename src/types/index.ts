/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
    username: string;
    email: string;
    fullName: string;
    profilePicture?: string;
    bio?: string;
  };
  
declare type UpdateUserParams = {
    username?: string;
    email?: string;
    fullName?: string;
    profilePicture?: string;
    bio?: string;
};

// ====== TEAM PARAMS
declare type CreateTeamParams = {
  name: string;
  description: string;
};

declare type UpdateTeamParams = {
  name?: string;
  description?: string;
};

// ====== HACKATHON PARAMS
declare type CreateHackathonParams = {
  name: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  maxParticipants: number;
  registrationDeadline: Date;
  status?: 'UPCOMING' | 'ONGOING' | 'FINISHED';
};

declare type UpdateHackathonParams = {
  name?: string;
  description?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  maxParticipants?: number;
  registrationDeadline?: Date;
  status?: 'UPCOMING' | 'ONGOING' | 'FINISHED';
};
