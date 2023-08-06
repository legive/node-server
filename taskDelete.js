exports.delete=(id, taskArray)=>{
    return new Promise(resolve=> {
        setTimeout(() => {
    const newtaskArray=taskArray.filter(task=>task.id!=id);

    resolve(newtaskArray);
   
}, 2000);
});

} 