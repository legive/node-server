exports.add=(id,nombre,estado)=>{
    let tasklistAdd=[];
    let nuevo={
        id:id,
        nombre:nombre,
        estado:estado
       }
       tasklistAdd.push(nuevo);
    return tasklistAdd;
} 