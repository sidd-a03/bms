import "dotenv/config";
import express from "express";
import { prisma } from "@repo/db";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", async(req, res) => {
 const { username, password } = req.body;
 
 const user = await prisma.user.create({
    data: {
      username,
      password,
    }
  })

  res.json({
    message: "Signup successfull",
    id: user.id
  })

})

app.listen(8080, () => {
  console.log("Server started on port 8080");
});