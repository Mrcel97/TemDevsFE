import { Component, OnInit, Input } from '@angular/core';
import { Temtem } from 'src/app/models/temtem';

@Component({
  selector: 'app-temtem-entry',
  templateUrl: './temtem-entry.component.html',
  styleUrls: ['./temtem-entry.component.scss']
})
export class TemtemEntryComponent implements OnInit {

  @Input() public temtem: Temtem;

  constructor() { }

  ngOnInit() {
  }

}
