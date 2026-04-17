const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getCountries } = require("./src/controllers/countriesController");

const startServer = async () => {
  let connected = false;

  // ⏳ WAIT FOR DB
  while (!connected) {
    try {
      await conn.authenticate();
      console.log("✅ DB connected");
      connected = true;
    } catch (err) {
      console.log("⏳ Waiting for DB...");
      await new Promise(res => setTimeout(res, 2000));
    }
  }

  // 🔄 Sync DB
  await conn.sync({ force: true });

  // 🌍 Load countries
  try {
    await getCountries(); // 👈 NOW awaited
    console.log("🌍 Countries loaded");
  } catch (err) {
    console.error("❌ Error loading countries:", err.message);
  }

  // 🚀 Start server
  server.listen(3001, () => {
    console.log("🚀 Server running on 3001");
  });
};

startServer();