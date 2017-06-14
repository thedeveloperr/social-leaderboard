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
      leaderboardData: [{
        team: {
          _id: "123",
          name: "JantarMantar",
          picture_url: "https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/18879349_1153562098082063_7316654845195190272_a.jpg",
          members: [{
            _id: "12",
            name: "Paras Sharma",
            picture_url:"https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/18879349_1153562098082063_7316654845195190272_a.jpg",
            instagram_username: "mohit",
            instagram_uid: "mohit",
            twitter_username: "mohit",
            twitter_uid: "mohit"
          },
          {
            _id: "12",
            name: "Paras Sharma",
            picture_url:"https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/18879349_1153562098082063_7316654845195190272_a.jpg",
            instagram_username: "mohit",
            instagram_uid: "mohit",
            twitter_username: "mohit",
            twitter_uid: "mohit"
          },{
            _id: "12",
            name: "Paras Sharma",
            picture_url:"https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/18879349_1153562098082063_7316654845195190272_a.jpg",
            instagram_username: "mohit",
            instagram_uid: "mohit",
            twitter_username: "mohit",
            twitter_uid: "mohit"
          },{
            _id: "12",
            name: "Paras Sharma",
            picture_url:"https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/18879349_1153562098082063_7316654845195190272_a.jpg",
            instagram_username: "mohit",
            instagram_uid: "mohit",
            twitter_username: "mohit",
            twitter_uid: "mohit"
          },
          {
            _id: "12",
            name: "Paras Sharma",
            picture_url:"https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/18879349_1153562098082063_7316654845195190272_a.jpg",
            instagram_username: "mohit",
            instagram_uid: "mohit",
            twitter_username: "mohit",
            twitter_uid: "mohit"
          }],
          desc: "Sample optional Description"
        }, stats: {
          twitter: {
            twitter_likes: 32,
            twitter_retweets: 16,
            tweet_count: 6
          }, instagram: {
            instagram_post_count: 45,
            instagram_likes: 109,
            instagram_comments: 16
          }, total_engangement:(109+16+32)
        }
      }]
    }
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NoContentComponent },
];
