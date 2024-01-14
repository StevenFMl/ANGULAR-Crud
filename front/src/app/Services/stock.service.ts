import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStock } from '../Interfaces/istock';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  private urlBase: String = 'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op='
  constructor(private cliente: HttpClient) { }

  todos(): Observable<IStock[]> {
    return this.cliente.get<IStock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IStock> {
    var sotcks = new FormData();

    return this.cliente.post<IStock>(this.urlBase + 'uno', sotcks);
  }

  insertar(proveedor: IStock): Observable<any> {
    var prov = new FormData();
    prov.append("ProductoId", proveedor.ProductoId.toString());
    prov.append("ProveedorId", proveedor.ProveedorId.toString());
    prov.append("Cantidad", proveedor.Precio_Venta.toString());
    prov.append("Precio_Venta", proveedor.Cantidad.toString());

    return this.cliente.post(this.urlBase + 'insertar', prov);

  }
  actualizar(proveedor: IStock): Observable<any> {
    var prov = new FormData();
    prov.append('id', proveedor.StockId.toString());
    prov.append("ProductoId", proveedor.ProductoId.toString());
    prov.append("ProveedorId", proveedor.ProveedorId.toString());
    prov.append("Cantidad", proveedor.Precio_Venta.toString());
    prov.append("Precio_Venta", proveedor.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prov);
  }

}
