const http=require('http');
const host='localhost';
const port=8075;

    const servidor=http.createServer((req, res)=>{
    console.log('Mi primer servidor')

    const user= [{nombre:'Aprender HTML', estado: true, id: 1},
    {nombre:'Aprender CSS', estado: true, id: 2},
    {nombre:'Aprender JAVASCRIPT', estado: true, id: 3},
    {nombre:'Aprender REACT', estado: true, id: 4},
    {nombre:'Aprender HOOKS', estado: true, id: 5},
    {nombre:'Aprender NODE & Npm', estado: false, id: 6}]

    res.write(JSON.stringify(user));
    res.end();
    _})

    servidor.listen(port,host,()=>{
        console.log(`Servidor escuchando en ${host}:${port}`);
    });
