import mysql2, { Pool, PoolOptions } from "mysql2";

// Tạo các config để kết nối
const databaseConfig: PoolOptions = {
  database: "quizz",
  port: 3306,
  user: "root",
  password: "12345678",
  host: "localhost",
};

// Khởi tạo kết nối
const database: Pool = mysql2.createPool(databaseConfig);

// Đẩy database ra bên ngoài để sử dụng
export default database.promise();
