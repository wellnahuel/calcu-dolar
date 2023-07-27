export interface RootObject {
  casa: CasaType;
}

export interface CasaType {
  compra: string;
  venta: string;
  agencia: string;
  nombre: string;
  variacion?: string;
  ventaCero?: string;
  decimales?: string;
  mejor_compra?: string;
  mejor_venta?: string;
  fecha?: string;
  recorrido?: string;
  afluencia?: Afluencia;
  observaciones?: Afluencia;
}

interface Afluencia {}
