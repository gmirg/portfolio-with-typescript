import { ObjectId } from "mongoose"
export class Project {
    constructor(
      public id: ObjectId,
      public projectTitle: string,
      public projectDescription: string,
      public projectimageUrl: string,
      public projectgithubLink: string,
      public projectdemoLink: string,
    ) {}
  }