import express, { Request, Response } from "express";

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("App is running!!");
});
