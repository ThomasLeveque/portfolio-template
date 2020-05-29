import { Project } from "./project.interface";

export interface Category {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  projects: Project[];
}
