import { Repo } from './../repo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repo: Repo;


  getProfileInfo(username: string) {
    return this.http.get(("https://api.github.com/users/") + username );
  
  }


  constructor(private http: HttpClient) {
    this.repo = new Repo('', 0, '', '', '',new Date());
  }
}
