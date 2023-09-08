import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsService } from './projects/projects.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsModule } from './projects/project.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/projectsDB'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}