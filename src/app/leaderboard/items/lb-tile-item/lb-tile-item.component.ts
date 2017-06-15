import { Component, OnInit, Input } from '@angular/core';
import { LeaderboardItemModel } from '../../common';

@Component({
  selector: 'sb-lb-tile-item',
  templateUrl: './lb-tile-item.component.html',
  styleUrls: ['./lb-tile-item.component.scss']
})
export class LbTileItemComponent implements OnInit {
  @Input() item : LeaderboardItemModel;
  @Input() rank: number;
  constructor() { }

  ngOnInit() {
  }

}


