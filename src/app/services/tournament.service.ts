import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  public teamSize = 1

  constructor() { }

  public upadateTeamSize(size: number) {
    console.log('New value detected!');
    if ( size > 0 && size < 7) {
      this.teamSize = size;
    }
  }

}
