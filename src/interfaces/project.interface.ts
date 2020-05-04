import { Image } from './image.interface';

export interface Project {
  id: string;
  name: string;
  desc: string;
  projectUrl: string;
  projectSrc: string;
  date: string;
  formatedDate?: string;
  skills: string[];
  categories: string[];
  images: Image[];
  createdAt: number;
  updatedAt: number;
}
