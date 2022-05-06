import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Profile } from './module/profile';
import { DataService } from './services/data.services';
const userList = ['Lucy', 'U', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  size: NzButtonSize = 'small';
  gap = 4; text: string = userList[3];
  color: string = colorList[3];
  userInfo: any;
  isCollapsed = false;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getProfileDetails().subscribe((response: Profile) => {
      this.userInfo = response
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    })
  }


}
