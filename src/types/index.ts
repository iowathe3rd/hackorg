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
