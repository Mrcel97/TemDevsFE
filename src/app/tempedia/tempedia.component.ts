import { Component, OnInit } from '@angular/core';
import { TemtemService } from '../services/temtem.service';
import { Temtem } from '../models/temtem';
import { Observable, forkJoin } from 'rxjs';
import { Type } from '../models/type';

@Component({
  selector: 'app-tempedia',
  templateUrl: './tempedia.component.html',
  styleUrls: ['./tempedia.component.scss']
})
export class TempediaComponent implements OnInit {

  public temtems: Temtem[] = [];
  public types: Type[] = [];

  constructor(private temtemService: TemtemService) { }

  ngOnInit() {
    forkJoin(
      this.temtemService.getTemtems(),
      this.temtemService.getTypes()
    ).subscribe(res => {
      this.temtems = res[0];
      this.types = res[1];

      // Map temtem types
      for(let temtem of this.temtems) {
        temtem.complexTypes = temtem.types.map(temtemType => this.types.find(type => type.name === temtemType));
      }

      console.log(this.temtems);
    });
  }

}
