import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

import { LeaderboardItemModel } from '../../common';

@Component({
  selector: 'sb-lb-hero-item',
  templateUrl: './lb-hero-item.component.html',
  styleUrls: ['./lb-hero-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbHeroItemComponent implements OnInit {

  @Input() public item: LeaderboardItemModel;

  constructor() {
    //
  }

  public ngOnInit() {
    //
  }

}
