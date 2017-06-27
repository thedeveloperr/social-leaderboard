import { Component, OnInit, Input } from '@angular/core';
import { LeaderboardItemModel } from '../../common';

@Component({
  selector: 'sb-lb-list-item',
  templateUrl: './lb-list-item.component.html',
  styleUrls: ['./lb-list-item.component.scss']
})
export class LbListItemComponent implements OnInit {
  @Input() item : LeaderboardItemModel;
  @Input() rank: number;
  constructor() { }

  ngOnInit() {
  }

}
