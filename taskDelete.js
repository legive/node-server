exports.delete=(id, taskArray)=>{
    const newtaskArray=taskArray.filter(task=>task.id!=id);
    return newtaskArray;
} 