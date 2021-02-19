import {Component, Input, OnInit} from '@angular/core';
import {Apps} from '../apps';
import {ProductService} from '../../components/product.service';
import {AppsService} from '../apps.service';

@Component({
  selector: 'app-apps-details',
  templateUrl: './apps-details.component.html',
  styleUrls: ['./apps-details.component.css']
})
export class AppsDetailsComponent implements OnInit {

  @Input() app: Apps;

  constructor(private appService: AppsService) { }

  ngOnInit() {

/*
    this.appService
        .updateApp(this.app.appID,{appID: this.app.appID})
        .catch(e=>console.log(e));
*/

  }
  lala(){
    console.log("LALA");
  }





}
