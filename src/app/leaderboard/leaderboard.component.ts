import { Component, OnInit, Input } from '@angular/core';

import { LeaderboardItemModel } from './common';

@Component({
  selector: 'sb-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  @Input() public items: LeaderboardItemModel[];

  constructor() {
    //
  }

  public ngOnInit() {
    //
  }

}
