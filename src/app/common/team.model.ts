import { MemberModel } from './';
export interface TeamModel {
  _id: string;
  name: string;
  picture_url: string;
  members: MemberModel[];
  desc?: string;
}
