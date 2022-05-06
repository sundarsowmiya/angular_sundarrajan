import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.services';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    constructor(private dataService: DataService) { }
    userInfo: any;
    ngOnInit() {
        this.getUserInfo('userInfo');
    }
    getUserInfo(key: string) {
        this.userInfo = localStorage.getItem(key);
        this.userInfo = (this.userInfo) ? JSON.parse(this.userInfo) : null;
    }
}
