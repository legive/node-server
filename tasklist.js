
var readlineSync = require('readline-sync');
var modulotaskAdd=require('./taskAdd');
var modulotaskDelete=require('./taskDelete');
var modulotaskDone=require('./taskDone');


const taskList=[{id:1, nombre:'Estudiar HTML', estado:true},
      {id:2, nombre:'Estudiar CSS', estado:true},
      {id:3, nombre:'Estudiar JAVASCRIPT', estado:true},
      {id:4, nombre:'Estudiar REACT', estado:false},]

imprimir(taskList);
console.log('MENU')
console.log('1. Agregar nueva tarea')
console.log('2. Elminar una tarea')
console.log('3. Completar una tarea')
let op = readlineSync.question('Elije una opción: ');

async function asyncDelete() {
    var id=readlineSync.question('Ingresa el id de la tarea a eliminar: ');
    const taskArray=await modulotaskDelete.delete(parseInt(id), taskList)
    imprimir(taskArray);
    }




switch (op){
    case '1':
        var id=taskList.length+1;
        var nombre=readlineSync.question('Escribe la tarea: ');
        var estado=readlineSync.question('1.Ejecutada 2.Pendiente: ');
        if (estado==1)estado=true;
        else(estado==false);
       
        modulotaskAdd.add(id, nombre, estado).then(taskArray=>{
            imprimir(taskArray)
        })
       
                
    break;

    case '2':
       asyncDelete()
    break;

    case '3':
        
    var id=readlineSync.question('Ingresa el id de la tarea a ejecutar: ');
    modulotaskDone.done(id, taskList).then(taskArray=>{
        imprimir(taskArray)   
    }).catch(()=>{
        console.log('La tarea no existe')
    }) 

    
    break;


}



function imprimir(tasklistArray){

    console.log(tasklistArray.map(task=> (
        'No.'+ task.id + ' Tarea: ' + task.nombre + ' Estado: ' + task.estado
        
        )))
}

