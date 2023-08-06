exports.done=(id, taskArray)=>{
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      
       const completeCount=taskArray.filter(task=>task.id==id).length;
       
    if (completeCount>0)
    {
      const indice=taskArray.findIndex(task =>task.id == id);
      taskArray[indice].estado=true;
      resolve(taskArray) ;
    }
    else{
      reject();
    }
   
}, 2000);
});
} 

