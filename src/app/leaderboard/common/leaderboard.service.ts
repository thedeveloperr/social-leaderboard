import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LeaderboardItemModel } from './';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaderboardService {
  private leaderBoardUrl = "https://sbcon.herokuapp.com/api/v1.0/leaderboard/";
  constructor(private http: Http) { }

  getLeaderboardStats(): Observable<LeaderboardItemModel[]> {
    return this.http.get(this.leaderBoardUrl)
      .map((res: Response) => res.json().data)
  }

}


