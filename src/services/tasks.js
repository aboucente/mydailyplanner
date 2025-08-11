import { sqlite, db } from "../boot/initdb";
//import loading
import { Loading, Notify } from "quasar";
const taskService = {
  async addTask(task) {
    Loading.show();
    const escape = (value) => {
      if (typeof value === "string") {
        return `'${value.replace(/'/g, "''")}'`;
      }
      return value;
    };

    const query =
      `INSERT INTO tasks (title, time, minutesToComplete, minutesSpent, isCompleted, createdAt, updatedAt, description) VALUES ` +
      `(${escape(task.title)}, ${escape(task.time)}, ${escape(task.minutesToComplete)}, 0, ` +
      `false, ${escape(task.createdAt)}, ${escape(task.updatedAt)}, ${escape(task.description)})`;
    try {
      const result = await db.execute(query);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâche ajoutée avec succès",
      });
      return result.changes.changes > 0 ? true : false;
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de l'ajout de la tâche",
      });
      return false;
    }
  },

  async getTasks() {
    Loading.show();
    const query = "SELECT * FROM tasks";
    try {
      const result = await db.query(query);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâches récupérées avec succès",
      });
      return result.values;
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de la récupération des tâches",
      });
      return [];
    }
  },

  async getLastFiveTasks() {
    Loading.show();
    const query = "SELECT * FROM tasks ORDER BY id DESC LIMIT 5";
    try {
      const result = await db.query(query);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâches récupérées avec succès",
      });
      return result.values;
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de la récupération des tâches",
      });
      return [];
    }
  },

  async updateTask(task) {
    Loading.show();
    const escape = (value) => {
      if (typeof value === "string") {
        return `'${value.replace(/'/g, "''")}'`;
      }
      return value;
    };

    const query = `UPDATE tasks SET title = ${escape(task.title)}, time = ${escape(task.time)}, minutesToComplete = ${escape(task.minutesToComplete)}, minutesSpent = ${escape(task.minutesSpent)}, isCompleted = ${escape(task.isCompleted)}, createdAt = ${escape(task.createdAt)}, updatedAt = ${escape(task.updatedAt)}, description = ${escape(task.description)} WHERE id = ${task.id}`;
    try {
      const result = await db.execute(query);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâche mise à jour avec succès",
      });
      return result.changes.changes > 0 ? true : false;
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de la mise à jour de la tâche",
      });
      return false;
    }
  },

  async getAwaitingTasks() {
    Loading.show();
    const query = "SELECT * FROM tasks WHERE isCompleted = false";
    try {
      const result = await db.query(query);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâches récupérées avec succès",
      });
      return result.values;
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de la récupération des tâches",
      });
      return [];
    }
  },

  async getCompletedTasks() {
    Loading.show();
    const query = "SELECT * FROM tasks WHERE isCompleted = true";
    try {
      const result = await db.query(query);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâches récupérées avec succès",
      });
      return result.values;
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de la récupération des tâches",
      });
      return [];
    }
  },

  async deleteTask(id) {
    Loading.show();
    const query = "DELETE FROM tasks WHERE id = ?";
    const args = [id];
    try {
      const result = await db.execute(query, args);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâche supprimée avec succès",
      });
      return result.changes.changes > 0 ? true : false;
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de la suppression de la tâche",
      });
      return false;
    }
  },
  async dashboardStats() {
    Loading.show();
    //Selected count(*) and count completed
    const query =
      "SELECT count(*) as total, count(isCompleted = true) as completed FROM tasks";
    try {
      const result = await db.query(query);
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Tâches récupérées avec succès",
      });
      return result.values[0];
    } catch (error) {
      Loading.hide();
      console.log(error);
      Notify.create({
        type: "negative",
        message: "Une erreur est survenue lors de la récupération des tâches",
      });
      return [];
    }
  },
};

export default taskService;
