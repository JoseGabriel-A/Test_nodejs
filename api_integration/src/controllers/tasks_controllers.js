import { Classroom, Student } from "../models/Classroom";

export const renderElements = async (req, res) => {
  try {
    const classroom = await Classroom.find().lean();
    res.render("index", { classroom });
  } catch (error) {
    console.log(error);
  }
};

export const renderModify = async (req, res) => {
  try {
    const students = await Student.find().lean();
    res.render("modify", { students });
  } catch (error) {
    console.log(error);
  }
};

export const addClassroom = async (req, res) => {
  try {
    const classroom = Classroom(req.body);
    const classroom_saved = await classroom.save();
    console.log(classroom_saved);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEdit = async (req, res) => {
  try {
    const classroom_by_id = await Classroom.findById(req.params.id).lean();
    res.render("edit", { classroom_by_id });
  } catch (error) {
    console.log(error);
  }
};

export const updateclassroom = async (req, res) => {
  try {
    const { id } = req.params;
    await Classroom.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    await Classroom.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const toggleActive = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Classroom.findById(id);
    task.active = !task.active;
    await task.save();
    console.log(task);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const studentAdd = async (req, res) => {
  try {
    const student = Student(req.body);
    const student_saved = await student.save();
    console.log(student_saved);
    res.redirect("/modify");
  } catch (error) {
    console.log(error);
  }
};

export const toggleActivestudent = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Student.findById(id);
    task.active = !task.active;
    await task.save();
    console.log(task);
    res.redirect("/modify");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditstudent = async (req, res) => {
  try {
    const student_by_id = await Student.findById(req.params.id).lean();
    res.render("edit", { student_by_id });
  } catch (error) {
    console.log(error);
  }
};

export const updatestudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndUpdate(id, req.body);
    res.redirect("/modify");
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect("/modify");
  } catch (error) {
    console.log(error);
  }
};
