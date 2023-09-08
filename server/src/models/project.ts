import { IProject } from '../interfaces/project.interface';
import { model, Schema, Document } from 'mongoose';

export const projectSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    demoLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const Project = model<IProject>('Project', projectSchema);
