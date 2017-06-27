import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LeaderboardItemModel } from '../common';
import { LeaderboardService } from '../common';

import 'rxjs/add/observable/interval';
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";

@Component({
  selector: 'sb-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss'],
  providers: [LeaderboardService]
})
export class LeaderboardPageComponent implements OnInit {

  public items$: Observable<LeaderboardItemModel[]>;

  constructor(private route: ActivatedRoute, private lBoardService: LeaderboardService) { }

  public ngOnInit() {
    this.items$ = Observable.interval(60000).startWith(0)
      .switchMap(() => { return this.lBoardService.getLeaderboardStats() });

    // this.items$ = this.route.data.map((data) => data.leaderboardData);
  }

}
