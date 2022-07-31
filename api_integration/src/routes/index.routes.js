import { Router } from "express";
import {
  renderElements,
  renderModify,
  addClassroom,
  renderEdit,
  updateclassroom,
  deleteClassroom,
  toggleActive,
  studentAdd,
  toggleActivestudent,
  renderEditstudent,
  updatestudent,
  deleteStudent,
} from "../controllers/tasks_controllers";
const router = Router();

router.get("/", renderElements);

router.get("/modify", renderModify);

router.post("/classroom/add", addClassroom);

router.get("/edit/:id", renderEdit);

router.post("/edit/:id", updateclassroom);

router.get("/delete/:id", deleteClassroom);

router.get("/toggleActive/:id", toggleActive);

router.post("/student/add", studentAdd);

router.get("/toggleActivestudent/:id", toggleActivestudent);

router.get("/editstudent/:id", renderEditstudent);

router.post("/editstudent/:id", updatestudent);

router.get("/deletestudent/:id", deleteStudent);

export default router;
