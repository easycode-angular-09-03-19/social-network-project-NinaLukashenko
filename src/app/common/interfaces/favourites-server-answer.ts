export interface FavouritesServerAnswer {
  counts: number;
  images: {
    likes: string[];
    views: string[];
    glories: string[];
    _id: string;
    url: string;
    create_date: string;
  }[];
}
