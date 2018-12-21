import { TemtemProfile } from './../shared/models/temtem-profile';
import { Temtem } from "../shared/models/temtem";

export class Tournament {
  constructor(
    public name: string,
    public description: string,
    // public img: string,
    public owner: string,
    public date: Date,
    // public teams: Team[],
    public prize: Prize,
    public rules: Rule[]
  ){}
}

export class Team {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public img: string,
    public owner: TemtemProfile,
    public date: Date,
    public players: Participant[],
    public staff: TemtemProfile[],
  ){}
}

export class Participant {
  constructor(
    public position: number,
    public user: TemtemProfile,
    public temtems: Temtem[],
  ){}
}

export class Prize {
  constructor(
    public description: string,
    public active: boolean
  ){}
}

export class Rule {
  constructor(
    public description: string,
    public acive: boolean
  ){}
}