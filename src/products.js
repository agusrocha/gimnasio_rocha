const products = [
  {id: 1, name:'Barra Olimpica 2,20mts', price: '18.000$', img: 'https://tienda.gfitness.com.ar/web/image/product.image/1233/image?unique=044518b', descripcion:'Largo: 2,20 mts, Peso: 20kg ,Fabricada en acero con caño de Zinc, Tratamiento anticorrosivo inoxidable, Rodamiento: Rulemanes Cromado, Diámetro de empuñadura: 25 mm, Diámetro para Discos: 50 mm, Capacidad de Carga: 500Kg ', category: 'barra', stock: 15},
  {id: 2, name:'Disco bumper 20k', price: '14.500$', img:'https://allsports.com.ar/wp-content/uploads/2021/06/disco-bumper-20-kg.jpg', descripcion: 'Diámetro interno: 50 mm, Material: Caucho, Inserto de acero', category: 'disco', stock: 15},
  {id: 3, name:'Pesa Rusa 16k', price: '3.000$', img:'https://http2.mlstatic.com/D_697041-MLC47937535612_102021-O.jpg', descripcion: 'Pesa redonda de 16k con agarradera de hierro fundido, con pintura especial, sintética y microperforada, Hecha íntegramente en hierro fundido', category: 'pesarusa', stock: 15},
  {id: 4, name:'Pesa Rusa 12k', price: '2.400$', img:'https://cdn.shopify.com/s/files/1/0389/1373/6843/products/FIT017001-12K_Mini1.jpg?v=1633542961', descripcion: 'Pesa redonda de 12k con agarradera de hierro fundido, engomada, sintética y microperforada, Hecha íntegramente en hierro fundido', category: 'pesarusa', stock: 15},
  {id: 5, name:'Disco bumper 15k', price: '12.000$', img:'https://http2.mlstatic.com/D_NQ_NP_778383-MLA48036164379_102021-V.jpg', descripcion: 'Diámetro interno: 50 mm, Material: Caucho, Inserto de acero', category: 'disco', stock: 15},
  {id: 6, name:'Disco bumper 5k', price: '7.000$', img:'https://http2.mlstatic.com/D_NQ_NP_756028-MLA42445427502_072020-V.jpg', descripcion: 'Diámetro interno: 50 mm, Material: Caucho, Inserto de acero', category: 'disco', stock: 15}

]

const category = [
  {id: 'barra', description: 'Barra'},
  {id: 'disco', description: ' Disco'},
  {id: 'pesarusa', description:'Pesa Rusa'}
]

export const getCategories = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(category)
    }, 1000)
  })
}

export const getFilterCategory = (category) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
    category ? resolve(products.filter(product=> product.category === category)) : resolve (products);
  }, 2000)
  })
};

export const getProducts = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() =>{ 
      resolve(products);
    }, 2000)
  })
};

export const getProductsById = (id) => {
  return new Promise((resolve, reject) =>{
    const product = products.find(prod => parseInt(prod.id) === parseInt(id))
    setTimeout(() => resolve(product), 1000)
  })
};

export const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(products[0]);
    }, 2000)
  })
};

  