import { Component, OnInit } from '@angular/core';
import {Apps} from '../apps';
import {AppsService} from '../apps.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-apps-create',
  templateUrl: './apps-create.component.html',
  styleUrls: ['./apps-create.component.css']
})
export class AppsCreateComponent implements OnInit {

  app: Apps = new Apps();

  submitted = false;
  appId: string;


  constructor(private appService: AppsService) { }

  ngOnInit() {


  }

  newApp(): void {
    this.submitted =false;

  }

  save(){
    this.appService.createApp(this.app);

  }
  onSubmitApp(){
    this.submitted = true;
    this.app.createDate = new Date();
    this.app.isDeleted=false;
    this.save();
  }

}
