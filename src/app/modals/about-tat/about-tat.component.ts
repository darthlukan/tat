import { Component, OnInit } from '@angular/core';
import { MiscService } from '../../services';

@Component({
  templateUrl: './about-tat.component.html'
})
export class AboutTatComponent implements OnInit {

  public modal: HTMLIonModalElement;
  
  constructor( private miscService: MiscService ) { }

  ngOnInit() {
  }

}
