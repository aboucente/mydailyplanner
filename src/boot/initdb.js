import { boot } from "quasar/wrappers";
import { Capacitor } from "@capacitor/core";
import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";
import { EdgeToEdge } from "@capawesome/capacitor-android-edge-to-edge-support";

let sqlite;
let db;

export default boot(async ({ app }) => {
  if (Capacitor.isNativePlatform()) {
    sqlite = new SQLiteConnection(CapacitorSQLite);
    // await EdgeToEdge.enable();
    await EdgeToEdge.setBackgroundColor({ color: "black" });
    const dbName = "my_db";

    try {
      // Vérifier si la connexion existe déjà.
      const isConn = (await sqlite.isConnection(dbName)).result;

      if (isConn) {
        // Si elle existe, la récupérer.
        db = await sqlite.retrieveConnection(dbName, false, "no-encryption", 1);
        console.log("Connexion SQLite récupérée ✅");
      } else {
        // Sinon, la créer et l'ouvrir.
        db = await sqlite.createConnection(dbName, false, "no-encryption", 1);
        await db.open();
        console.log("Nouvelle connexion SQLite créée et ouverte ✅");

        // Créer la table si elle n'existe pas, uniquement si c'est la première fois.
        await db.execute(`
          CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            time TEXT,
            minutesToComplete TEXT,
            minutesSpent TEXT,
            isCompleted BOOLEAN,
            createdAt TEXT,
            updatedAt TEXT,
            description TEXT
          );
        `);
      }
    } catch (e) {
      console.error("Erreur lors de la connexion à la base de données :", e);
    }
  } else {
    console.warn("SQLite non disponible (web)");
  }

  app.config.globalProperties.$sqlite = sqlite;
  app.config.globalProperties.$db = db;
});

export { sqlite, db };
