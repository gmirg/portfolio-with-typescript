import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from './projects.dto';
import { ObjectId, Schema, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    try {
      const projects = await this.projectModel.find().exec();
      return projects;
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async findOne(projectId: string | ObjectId): Promise<Project | null> {
    try {
      const project = await this.projectModel.findById(projectId).exec();
      if (!project) {
        throw new NotFoundException();
      }
      return project;
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async create(
    name: string,
    description: string,
    imageUrl: string,
    githubLink: string,
    demoLink: string,
  ): Promise<Project> {
    try {
      const newProject = new this.projectModel({
        name,
        description,
        imageUrl,
        githubLink,
        demoLink,
      });
      const savedProject = await newProject.save();
      return savedProject;
    } catch (error) {
      throw new Error('Failed to create project');
    }
  }
  async deleteById(projectId: string | ObjectId): Promise<{ message: string }> {
    try {
      await this.projectModel.findByIdAndRemove(projectId).exec();
      return { message: 'Project Deleted' };
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async updateById(
    id: string | ObjectId,
    name: string,
    description: string,
    imageUrl: string,
    githubLink: string,
    demoLink: string,
  ): Promise<{ message: string }> {
    try {
      await this.projectModel
        .findByIdAndUpdate(id, {
          name,
          description,
          imageUrl,
          githubLink,
          demoLink,
        })
        .exec();
      return { message: 'Project Updated' };
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
