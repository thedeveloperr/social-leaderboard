import { TwitterStatsModel, InstagramStatsModel } from './';
export interface StatsModel {
  twitter: TwitterStatsModel;
  instagram : InstagramStatsModel;
  total_engagements: number;
}
