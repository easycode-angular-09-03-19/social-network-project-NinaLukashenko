export interface WinnersServerAnswer {
  counts: number;
  winners: {
    challenge_id: string;
    member_id: {
      challenge_id: string;
      exposure_value: number;
      images: [];
      level: { curent_level: number; votes_to_next_level: number };
      points: number;
      submited_time: string;
      total_votes: number;
      user_id: { avatar: string };
      __v: number;
      _id: string;
    };
    public_user_id: string;
    submited_time: string;
    __v: number;
    _id: string;
  }[];
}
