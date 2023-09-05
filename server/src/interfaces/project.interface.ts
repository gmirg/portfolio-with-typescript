import { Document } from "mongoose"
import { ObjectId } from "mongoose"

export interface IProject extends Document {
  _id: ObjectId,
  name: string
  description: string
  imageUrl: string
  githubLink: string
  demoLink: string
}