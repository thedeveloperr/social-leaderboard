import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LeaderboardItemModel } from '../common';

@Component({
  selector: 'sb-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss']
})
export class LeaderboardPageComponent implements OnInit {

  public items$: Observable<LeaderboardItemModel[]>;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    this.items$ = this.route.data.map((data) => data.leaderboardData);
  }

}
