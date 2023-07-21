const empresa = {
    nombre:'Pepsi',
    direccion:'Calle x',
    rol:'refrescos'
}
//const nombre=empresa.nombre;
//const direccion=empresa.direccion;


const {nombre, direccion, rol} = empresa;
console.log(empresa);
console.log(nombre);
console.log(direccion);

const imprimeEmpresa = ({nombre, rol})=>{
    console.log({nombre,rol})
}

imprimeEmpresa(empresa);

const carros = ['mazda', 'bmw', 'porche'];
const e1 = carros[0];
const e2 = carros[1];
const e3 = carros[2];
console.log(e1); 
console.log(e2);   
console.log(e3); 

const [c1, c2, c3] = carros;

console.log(c1); 
console.log(c2);   
console.log(c3); 

const perfil = {
    nombre: 'Ivette',
    apellido: 'Castillo',
    correo: 'ivettecrock@gmail.com',
    salario: 50000,
};

const imprimePerfil = ({nombre, salario})=>{
    console.log({nombre,salario})
}
imprimePerfil(perfil)

