import { Category } from "./category";
import { Review } from "./review";
import { Skill } from "./skill";

export interface Mentor {
  id: string;
  displayName: string;
  image: string;
  averageStarReview: number;
  totalStarRating: number;
  numberOfReviews: number;
  bio: string;
  reviews: Review[];
  categories: Category[];
  skills: Skill[];
}
