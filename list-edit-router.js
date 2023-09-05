const express = require('express');
const router = express.Router();


// Mi lista de tareas
const taskList=require('./data')

router.use(express.json());

router.post('/', (req, res) => {
    const newTask = req.body;
    console.log(newTask)
    
    if (!newTask) {
      return res.status(400).json({ error: 'Error al ingresar tarea' });
    }
        taskList.push(newTask)
    res.status(201).json(taskList);
  });

  router.delete('/:id', (req, res) => {
    const idpar =   parseInt(req.params.id)
    console.log(idpar)
    const index=taskList.findIndex((task)=>task.id===idpar)

        console.log(index)
    if (index === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
      }
      else
      {
        taskList.splice(index, 1)
        res.status(201).json({ message: 'Tarea eliminada con éxito.' });
        res.json(taskList);
        console.log(taskList)
      }
       
  });

  router.put('/:id', (req, res) => {

    const idpar =   parseInt(req.params.id)
    console.log(idpar)
    const index=taskList.findIndex((task)=>task.id===idpar)

        console.log(index)
    if (index === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
      }
      else
      {
        const { nombre, estado } = req.body;
        taskList[index].nombre=nombre;

        if (estado !== undefined) {
            taskList[index].estado = estado;

          }
        res.status(201).json({ message: 'Tarea actualizada con éxito.' });
        res.json(taskList[index]);
        console.log(taskList)
      }
    

    
  });


module.exports = router;