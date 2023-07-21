console.log('Inicio de programa.');

setTimeout(()=>{
    console.log('Primer Time out....')
}, 3000);


setTimeout(()=>{
    console.log('Segundo Time out....')
}, 0);

setTimeout(()=>{
    console.log('Tercer Time out....')
}, 0);

console.log('Fin de programa.');