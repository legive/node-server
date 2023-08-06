exports.add=(id,nombre,estado)=>{
           
        
            let tasklistAdd=[];
            let nuevo={
                id:id,
                nombre:nombre,
                estado:estado
               }
               return new Promise(resolve => {
                setTimeout(() => {
            tasklistAdd.push(nuevo);
            
            resolve(tasklistAdd) ;
            
        }, 2000);
    });
   
    

} 