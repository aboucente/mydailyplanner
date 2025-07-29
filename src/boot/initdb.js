//Utiliser IndexedDB pour stocker les tâches
import { boot } from "quasar/wrappers";
import { openDB } from "idb";

async function initDB() {
  const db = await openDB("tasks", 1, {
    upgrade(db) {
      db.createObjectStore("tasks", { keyPath: "id" });
    },
  });
}
boot(({ app }) => {
  initDB();
});

export default db;
