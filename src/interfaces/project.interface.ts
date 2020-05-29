import { Image } from './image.interface';
import { Category } from './category.interface';

export interface Project {
  id: string;
  name: string;
  desc: string;
  projectUrl: string;
  projectSrc: string;
  date: string;
  skills: string[];
  categories: Category[];
  images: Image[];
  createdAt: number;
  updatedAt: number;
}
