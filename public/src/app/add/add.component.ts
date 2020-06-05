import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  job = {
    'title': '',
    'company': '',
    'location': ''
  };

  errors = {};

  constructor(private _jbservice: JobService, private _router: Router) { }

  ngOnInit() {
  }

  create() {
    let observable = this._jbservice.createJob(this.job);
    observable.subscribe( data => {
      if ( data['status'] === 'not ok') {
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
