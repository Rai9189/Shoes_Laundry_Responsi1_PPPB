import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./src/routes/itemRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    Selamat datang di Shoes Laundry API! Gunakan route /items untuk CRUD.<br><br>
    Nama : Rafi Rai Pasha Afandi<br>
    NIM : 21120123130073<br>
    Kelompok : 19<br>
    Shift : 1
  `);
});

app.use("/items", itemRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
