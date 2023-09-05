import { IProject } from "src/interfaces/project.interface"
import { Response, Request  } from "express"
import Project from "../models/project"

const getProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const todos: IProject[] = await Project.find()
      res.status(200).json({ todos })
    } catch (error) {
      throw error
    }
}
const addProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<IProject, "name" | "description" | "imageUrl" | "githubLink" | "demoLink">
  
      const todo: IProject = new Project({
        name: body.name,
        description: body.description,
        imageUrl: body.imageUrl,
        githubLink: body.githubLink,
        demoLink: body.demoLink
      })
  
      const newTodo: IProject = await todo.save()
      const allTodos: IProject[] = await Project.find()
  
      res
        .status(201)
        .json({ message: "Project added", todo: newTodo, todos: allTodos })
    } catch (error) {
      throw error
    }
  }

  const updateProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateProject: IProject | null = await Project.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allProject: IProject[] = await Project.find()
      res.status(200).json({
        message: "Project updated",
        todo: updateProject,
        todos: allProject,
      })
    } catch (error) {
      throw error
    }
  }

  const deleteProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedProject: IProject | null = await Project.findByIdAndRemove(
        req.params.id
      )
      const allProjects: IProject[] = await Project.find()
      res.status(200).json({
        message: "Project deleted",
        project: deletedProject,
        projects: allProjects,
      })
    } catch (error) {
      throw error
    }
  }
  
  export { getProject, addProject, updateProject, deleteProject }