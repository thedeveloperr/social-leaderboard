export * from './common';
export * from './items';
export * from './leaderboard-page';
export * from './leaderboard.component';

import * as LB from './';

export const LEADERBOARD_COMPONENTS = [
  LB.LeaderboardPageComponent,
  LB.LeaderboardComponent,

  LB.LbHeroItemComponent
];
