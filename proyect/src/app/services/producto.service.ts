import { Injectable } from "@angular/core";
import { Producto } from "../interfaces/producto.interface";

@Injectable()
export class ProductoService{
    products:Producto[] =[
        {
      id: 1,
      name: 'Royal Canin alimento',
      price: '64.700',
      size: '1.3 kg',
      description: 'Alimento para cachorros Bulldog Francés hasta los 12 meses. Su contenido en prebióticos y proteínas LIP*, de fácil digestión, promueven el equilibrio de la flora intestinal',
      img: 'royal-canin.jpg',
    },
    
    {
      id: 3,
      name: 'WINSEE Arnés',
      price: '150.000',
      size: 'XS, S, M, L',
      description: 'chaleco acolchado reflectante ajustable para exteriores, clips de correa delantera/trasera para perros pequeños, medianos, grandes y extragrandes, mango de fácil control para caminar',
      img: 'arnes.jpg'
    },
    {
      id: 4,
      name: 'CAMA PET EXTENSIBLE CALVINA',
      price: '399.900',
      size: 'Ancho: 58,3 cm x Alto:30,8 cm x Prof: 80,9 cm. (Las medidas pueden variar de 2 a 3 cm).',
      description: 'Con un diseños artesanal y elaborado completamente a manos, te ofrecemos un diseño donde tu mascota pueda sentirse acogedora y donde va encontrar un lugar cómodo para descansar, cuenta con una colchoneta a tamaño para que pueda acoger a tu mascota.',
      img: 'CAMA.jpg'
    },
    {
      id: 5,
      name: 'Frenchie Food Water Bowl ',
      price: '160.600',
      size: '13.7 oz',
      description: 'Plato alimentador de mascotas antideslizante inclinado inclinado elevado para perros de cara plana, Bulldog francés, Pug, Gato, Cachorro, Shih Tzu, etc.',
      img: 'comedor.jpg'
    },
    {
      id: 6,
      name: 'Cepillo Quita Nudos Deslanador Y Para Pelo Muerto Pequeño',
      price: '32.000',
      size: 'talla S',
      description: 'Cepillo ideal para perros o gatos con pelo medio o largo, ayuda a evitar y eliminar nudos ',
      img: 'cepillo.jpg'
    },
    {
      id: 7,
      name: 'Pinza para cortar unas bull dog frances',
      price: '45.000',
      size: '13 x 5.5 cm',
      description: 'herramienta practica de uso comodo y seguro.La pinza cuenta con mangos antideslzantes de vinilo y no se deslizara de su mano',
      img: 'cortaunas.jpg'
    },
    {
      id: 8,
      name: 'DISPENSADOR INTELIGENTE DE COMIDA PARA MASCOTAS',
      price: '553.000',
      size: '1 unit',
      description: 'Alimenta e interactúa con tu mascota, así no estés en casa. Sabemos que tu mascota es parte de tu familia, por ello merece los mejores cuidados especialmente no dejarla con hambre cuando queda sola.',
      img: 'dispensador.jpg'
    },
    {
      id: 9,
      name: 'Casa Para Perros Plástica ',
      price: '340.000',
      size: '96 x 105 x 98 cm',
      description: 'Para que tu mascota se sienta protegida siempre. Gracias a ella, tu fiel amigo (a) podrás dormir y descansar a diario en su propio lugar, cómodo y limpio.',
      img: 'casa.jpg'
    },
    {
      id: 10,
      name: 'Zapatos Para Mascotas Bota Silicona Impermeable Perros Gatos',
      price: '25.000',
      size: 'XS, S, M, L',
      description: 'Ideal para que tu peludito no ensucie sus paticas en invierno.',
      img: 'botas.jpg'
    },
]

public getProductoList(){
return this.products

}



}


