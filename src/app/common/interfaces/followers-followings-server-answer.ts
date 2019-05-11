export interface FollowersFollowingsServerAnswer {
  counts: 8;
  users: {
    avatar: string;
    city: string;
    cover: string;
    full_name: string;
    _id: string;
    following?: boolean;
  }[];
}
