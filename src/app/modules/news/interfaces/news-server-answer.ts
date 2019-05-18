export interface NewsServerAnswer {
  counts: number;
  news: {
    pictures: {
      likes: string[];
      views: string[];
      _id: string;
      url: string;
    }[];
    _id: string;
    owner: {
      avatar: string;
      country: string;
      full_name: string;
      _id: string;
    };
    date: string;
    __v: number;
  }[];
}
