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

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
  @Get()
  findAll(): any {
    return this.projectsService.findAll();
  }
  @Get(':bookId')
  findOne(@Param('bookId') bookId: string) {
    return this.projectsService.findOne(bookId);
  }
  @Post()
  addProject(
    @Body('name') ProjectName: string,
    @Body('description') ProjectDescription: string,
    @Body('imageURL') ProjectImageUrl: string,
    @Body('githubLink') ProjectGithubLink: string,
    @Body('demoLink') ProjectDemoLink: string,
  ): any {
    return this.projectsService.create(
      ProjectName,
      ProjectDescription,
      ProjectImageUrl,
      ProjectGithubLink,
      ProjectDemoLink,
    );
  }
}
