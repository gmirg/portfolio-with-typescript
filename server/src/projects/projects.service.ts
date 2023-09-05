import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from './projects.dto';
import { ObjectId, Types } from 'mongoose';

@Injectable()
export class ProjectsService {
  private projectsDb: Project[] = [];
  findAll(): any {
    return [...this.projectsDb];
  }
  findOne(projectId: string | ObjectId) {
    const projectIndex = this.projectsDb.find((elem) => elem.id === projectId);
    if (projectIndex === undefined) {
      throw new NotFoundException();
    }
    return projectIndex;
  }
  create(
    projectTitle: string,
    projectDescription: string,
    projectimageUrl: string,
    projectgithubLink: string,
    projectdemoLink: string,
  ): any {
    const _id  = new Types.ObjectId();
    const newProject = new Project(
      _id,
      projectTitle,
      projectDescription,
      projectimageUrl,
      projectgithubLink,
      projectdemoLink,
    );
    this.projectsDb = this.projectsDb.concat(newProject);
    return newProject;
  }
  deleteById(projectId: string | ObjectId): any {
    const index = this.projectsDb.findIndex((elem) => elem.id === projectId);
    if (index === -1) {
      throw new NotFoundException();
    }
    this.projectsDb.splice(index);
    return { message: 'Project Deleted' };
  }
  UpdateById(
    id: string | ObjectId,
    projectTitle: string,
    projectDescription: string,
    projectimageUrl: string,
    projectgithubLink: string,
    projectdemoLink: string,
  ): any {
    const index = this.projectsDb.findIndex((elem) => elem.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }
    const singleProject = this.projectsDb[index];
    if (projectTitle) {
      singleProject.projectTitle = projectTitle;
    } else if (projectDescription) {
        singleProject.projectDescription = projectDescription;
    } else if (projectimageUrl) {
        singleProject.projectimageUrl = projectimageUrl;
    } else if (projectgithubLink) {
        singleProject.projectgithubLink = projectgithubLink;
    } else if (projectdemoLink) {
        singleProject.projectdemoLink = projectdemoLink;
    }
    this.projectsDb[index] = singleProject;
    return { message: 'Project Updated' };
  }
}
