import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  jobs = [];

  constructor(private _jbservice: JobService) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs() {
    let observable = this._jbservice.getJobs();
    observable.subscribe (data => {
      this.jobs = data['jobs'];
    });
  }

}
