import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.services';
import { Profile } from '../../module/profile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) { }
  userInfo: any;
  ngOnInit() {
    this.dataService.getProfileDetails().subscribe((response: Profile) => {
      this.userInfo = response
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    })
  }

}
