import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Producto.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IProductos[]> {
    return this.cliente.get<IProductos[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IProductos> {
    var productos = new FormData();
    return this.cliente.post<IProductos>(this.urlBase + 'uno', productos);
  }
  insertar(producto: IProductos): Observable<any> {
    var prod = new FormData();
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Stock', producto.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(producto: IProductos): Observable<any> {
    var prod = new FormData();
    prod.append('Id', producto.ProductoId.toString());
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Stock', producto.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('ISd', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}

