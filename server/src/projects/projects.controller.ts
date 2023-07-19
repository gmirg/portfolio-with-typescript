import { Controller,Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}
    @Get()
    findAll() {
        return this.projectsService.findAll();
    }
    @Get(':bookId') 
    findOne(@Param('bookId') bookId: string) { 
    return this.projectsService.findOne(bookId); 
  }

}
