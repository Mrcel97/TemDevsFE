import { Temtem } from "./temtem";

export interface TemtemProfile {
  avatar: string;
  username: string;
  gender: Gender;
  favTemtem: Temtem;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}