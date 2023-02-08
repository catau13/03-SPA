import { Component, Input } from '@angular/core';
import {Producto} from 'src/app/interfaces/producto.interface'; 


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  @Input() myProducto: Producto;


}
