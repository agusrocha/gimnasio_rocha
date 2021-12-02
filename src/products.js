const products = [
  {id: 1, name:'Barra Olimpica 2,20mts', price: '18.000$', img: 'https://tienda.gfitness.com.ar/web/image/product.image/1233/image?unique=044518b', descripcion:'Largo: 2,20 mts, Peso: 20kg ,Fabricada en acero con caño de Zinc, Tratamiento anticorrosivo inoxidable, Rodamiento: Rulemanes Cromado, Diámetro de empuñadura: 25 mm, Diámetro para Discos: 50 mm, Capacidad de Carga: 500Kg '},
  {id: 2, name:'Disco bumper 20k', price: '4.500$', img:'https://allsports.com.ar/wp-content/uploads/2021/06/disco-bumper-20-kg.jpg'},
  {id: 3, name:'Pesa Rusa 16k', price: '3.000$', img:'https://http2.mlstatic.com/D_697041-MLC47937535612_102021-O.jpg'}
]

export const getProducts = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getItem = new Promise (function(resolve,reject){
  setTimeout(()=>{
    resolve(products[0]);
  }, 2000)
});
  