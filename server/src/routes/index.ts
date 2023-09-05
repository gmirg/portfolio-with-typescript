import { Router } from "express"
import { getProject, addProject, updateProject, deleteProject } from "../controllers/index"

const router: Router = Router()

router.get("/project", getProject)

router.post("/add-project", addProject)

router.put("/edit-project/:id", updateProject)

router.delete("/delete-project/:id", deleteProject)

export default router