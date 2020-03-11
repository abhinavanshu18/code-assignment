import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

const Days = { 0 : 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu',5: 'Fri',6: 'Sat' };
@Component({
  selector: 'app-online-lession-list',
  templateUrl: './online-lession-list.component.html',
  styleUrls: ['./online-lession-list.component.css']
})

export class OnlineLessionListComponent implements OnInit {
  channelList: any = [];
  channelListArrByDate = [];
  
  constructor(public channelService: ChannelService) {

   }

  ngOnInit() {
    this.getChannelInFormatedOrder();
  }

  getDay(time) {
    return Days[(new Date(time)).getDay()];
  }

  getChannelInFormatedOrder() {
    this.channelService.getChannels().subscribe((res: any) => {
      this.channelList = res.channels.sort((elem1, elem2) => new Date(elem2.time) - new Date(elem1.time));
     //  console.log("Channel List : ", this.channelList);
      var sameDayChannel = [];
      var checkingDate = this.channelList[0].time.split(' ')[0];
      this.channelList.map(item => {
        if(item.time.split(' ')[0] === checkingDate) {
         sameDayChannel.push(item);
        } else {
          this.channelListArrByDate.push(sameDayChannel);
          sameDayChannel = [item];
          checkingDate = item.time.split(' ')[0];
        }        
      })
      console.log("channelListArrByDate : ", this.channelListArrByDate);
    });
  }
}
