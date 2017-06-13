import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { LeaderboardItemModel } from './common';

@Component({
  selector: 'sb-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
