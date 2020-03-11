import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lession-card',
  templateUrl: './lession-card.component.html',
  styleUrls: ['./lession-card.component.css']
})
export class LessionCardComponent implements OnInit {

  @Input() channel;
  
  constructor() { }

  ngOnInit() {
    console.log("LessionCardComponent : ", this.channel);
  }

  getRedTimeFormatted(time) {
    let getHours = (new Date(time)).getHours();
    let reqTime = "";
    if(getHours > 12) {
     return (getHours - 12) + ":00 PM - " + (getHours - 11) + ":00 PM EDT"
    } else {
      return reqTime = getHours + ":00 AM - " + (getHours + 1) + ":00 AM EDT"
    }
  }
}
