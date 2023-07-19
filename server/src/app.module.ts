import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsService } from './projects/projects.service';
import { ProjectsController } from './projects/projects.controller';

@Module({
  imports: [],
  controllers: [AppController, ProjectsController],
  providers: [AppService, ProjectsService],
})
export class AppModule {}
