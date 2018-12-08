import { Component, OnInit } from '@angular/core';
import { Gender, TemtemProfile } from './../../shared/models/temtem-profile';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Temtem } from 'src/app/shared/models/temtem';
import { TemtemService } from 'src/app/shared/services/temtem.service';
import { startWith, map } from 'rxjs/operators';
import { MatSelectChange, MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-temtem',
  templateUrl: './temtem-profile-card.component.html',
  styleUrls: ['./temtem-profile-card.component.scss']
})
export class TemtemProfileCardComponent implements OnInit {

  public profile: TemtemProfile = <TemtemProfile>{};
  
  private temtems: Temtem[] = [];

  public temtemSelectControl = new FormControl();
  public filteredOptions: Observable<Temtem[]>;
  
  constructor(private temtemService: TemtemService) { }

  ngOnInit() {
    this.temtemService.getTemtems().subscribe(res => { 
      this.temtems = res;
      this.filteredOptions = this.temtemSelectControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): Temtem[] {        
    if(typeof value !== 'string')
      return this.temtems;
      
    const filterValue = value.toLowerCase();
    return this.temtems.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public getTemtemName(temtem?: Temtem): string | undefined {
    return temtem ? temtem.name : undefined;
  }

  public favTemtemChange(fav: MatAutocompleteSelectedEvent) {  
    this.profile.favTemtem = fav.option.value;
  }

  public genderChange(value: Gender) {
    this.profile.gender = value;
  }
}
