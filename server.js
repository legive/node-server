const express=require("express");
const app=express();
const port=3000

const listViewRouter =require("./list-view-router");
const listEditRouter =require("./list-edit-router");


app.get("/", function (req, res) {
  res.send("Bienvenido a Organiza tu día");
});


app.use('/tareas', listViewRouter);
app.use('/tareas', listEditRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
