import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://ewerton_4na_user:jkEy5SqZyehuyhNNExFH94j9t6Rimcs1@dpg-cr7qs2bv2p9s73f7dh70-a.oregon-postgres.render.com/ewerton_4na";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
