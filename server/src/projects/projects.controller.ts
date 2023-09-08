import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Schema } from 'mongoose';
import { Project } from './projects.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
  @Get()
  async findAll(): Promise<Project[]> {
    const projects = this.projectsService.findAll()
    return await projects;
  }
  @Get(':id')
  findOne(@Param('id') projectId: string) {
    return this.projectsService.findOne(projectId);
  }
  @Post()
  addProject(
    @Param('id') projectId: Schema.Types.ObjectId,
    @Body('name') projectName: string,
    @Body('description') projectDescription: string,
    @Body('imageURL') projectImageUrl: string,
    @Body('githubLink') projectGithubLink: string,
    @Body('demoLink') projectDemoLink: string,
  ): any {
    return this.projectsService.create(
      projectName,
      projectDescription,
      projectImageUrl,
      projectGithubLink,
      projectDemoLink,
    );
  }
  @Delete(':id')
  deleteTodoById(@Param('id') projectId: string): any {
    return this.projectsService.deleteById(projectId);
  }
  @Patch(':id')
  updateTodoById(
    @Param('id') projectId: string,
    @Body('name') projectName: string,
    @Body('description') projectDescription: string,
    @Body('imageURL') projectImageUrl: string,
    @Body('githubLink') projectGithubLink: string,
    @Body('demoLink') projectDemoLink: string,
  ): any {
    return this.projectsService.updateById(
      projectId,
      projectName,
      projectDescription,
      projectImageUrl,
      projectGithubLink,
      projectDemoLink,
    );
  }
}
