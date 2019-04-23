export interface UserPicturesServerAnswer {
  counts: number;
  images: {
    likes: string[];
    views: string[];
    glories: Array<any>;
    _id: string;
    url: string;
  }[];
}
