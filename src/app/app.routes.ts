import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { LeaderboardPageComponent } from './leaderboard';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'leaderboard',
    component: LeaderboardPageComponent,
    data: {
      leaderboardData: []
    }
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NoContentComponent },
];
