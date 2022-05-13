import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  rawlist: any;
  constructor(private activityService: ActivityService) { }
onGetUsers():void  {
  this.activityService.getActivity()
  .subscribe(
    data => this.rawlist=data,
    (response) => this.rawlist,

    ) 
  
}


getRawData() {
  this.activityService
    .getRawData()
    .subscribe(
      data => this.rawlist=data,
      error => console.log(error)
    );
}
  ngOnInit(): void {
 
    this.activityService.getRawData().subscribe(data => {
      this.rawlist = data;
    })
  }
  

}
