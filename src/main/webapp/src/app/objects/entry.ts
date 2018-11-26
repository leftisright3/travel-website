import {Section} from "./section";

export class Entry {
  id: number;
  name?: string;
  sections?: Section[];
  location?: string;
  pictures?: string;
  latitude?: number;
  longitude?: number;
  thumbnail?: string;
  title?: string;
  heading?: string;
  description?: string;
}
