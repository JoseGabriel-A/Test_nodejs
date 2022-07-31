import { Schema, model } from "mongoose";

const classroomSchema = new Schema(
  {
    class_: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    order_: {
      type: Number,
      required: true,
    },

    number_of_students: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    students_list: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },

    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Classroom = model("Classroom", classroomSchema);
const Student = model("Student", studentSchema);

module.exports = { Classroom, Student };
