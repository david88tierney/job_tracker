import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient) { }

  getJobs() {
    return this._http.get('/jobs');
  }

  createJob(job) {
    return this._http.post('/job', job);
  }

  getOne(id) {
    return this._http.get(`/job/${id}`);
  }

  updateOne(id, job) {
    return this._http.put(`/job/${id}`, job);
  }

  deleteOne(id) {
    return this._http.delete(`/job/${id}`);
  }

}