import { Component,OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Producto[] =[];

  constructor (private _productoService: ProductoService){


  }

ngOnInit(): void {
  this.products =this._productoService.getProductoList()
}
}
