import mongoose from "mongoose"
export class Project {
    constructor(
      public _id: mongoose.Schema.Types.ObjectId | string,
      public name: string,
      public description: string,
      public imageUrl: string,
      public githubLink: string,
      public demoLink: string,
    ) {}
  }