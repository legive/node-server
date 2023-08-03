exports.done=(id, taskArray)=>{
    const indice=taskArray.findIndex(task =>task.id == id);
 taskArray[indice].estado=true;
  return taskArray;
} 

