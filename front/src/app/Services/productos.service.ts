import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase: string =
    'http://localhost/ANGULAR-Crud/Inventario/Controllers/Producto.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IProductos[]> {
    return this.cliente.get<IProductos[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IProductos> {
    var prod = new FormData();
    prod.append('productoId', id.toString());
    return this.cliente.post<IProductos>(this.urlBase + 'uno', prod);
  }
  insertar(producto: IProductos): Observable<any> {
    var prod = new FormData();
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Cantidad', producto.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(producto: IProductos, id: number): Observable<any> {
    var prod = new FormData();
    prod.append('productoId', id.toString());
    prod.append('Nombre', producto.Nombre);
    prod.append('Precio', producto.Precio.toString());
    prod.append('Cantidad', producto.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('productoId', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}

