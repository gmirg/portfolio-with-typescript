import { IProject } from '../interfaces/project.interface';
import { model, Schema } from 'mongoose';

const projectSchema: Schema = new Schema(
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

export default model<IProject>('Todo', projectSchema);
