import { app } from "./app.js";

app.listen(process.env.PORT || 7001, () => {
  console.log(
    `Server Started on PORT:${process.env.PORT} and on Mode:${process.env.MODE}  `
  );
});
