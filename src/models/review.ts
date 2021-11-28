import { Mentor } from "./mentor";

export interface Review {
  id: string;
  starRating: number | string | undefined;
  comment: string | number | undefined;
  consultant?: Mentor;
}
