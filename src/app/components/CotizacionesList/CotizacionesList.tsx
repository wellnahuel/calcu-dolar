import { getCotizacion } from '@/app/data/services';
import { CasaType } from '@/app/models/cotizaciones.model';
import React from 'react'

interface Props {
    lista: {
      casa:CasaType
    }[];
}

function CotizacionesList({ lista }: Props) {

  return (
    <div>
         {lista.length > 0 && lista.map((t) => (
            <p key={t.casa.agencia}>{t.casa.nombre} {t.casa.venta}</p>            
        ))} 
    </div>
  )
}

export default CotizacionesList

/* [
{
"casa": {
"compra": "272,54",
"venta": "282,54",
"agencia": "349",
"nombre": "Dolar Oficial",
"variacion": "0",
"ventaCero": "TRUE",
"decimales": "2"
}
},
{
"casa": {
"compra": "528,00",
"venta": "533,00",
"agencia": "310",
"nombre": "Dolar Blue",
"variacion": "0,95",
"ventaCero": "TRUE",
"decimales": "2"
}
},
{
"casa": {
"compra": "No Cotiza",
"venta": "0",
"agencia": "311",
"nombre": "Dolar Soja",
"variacion": "0",
"ventaCero": "TRUE",
"decimales": "3"
}
},
{
"casa": {
"compra": "513,55",
"venta": "536,46",
"agencia": "312",
"nombre": "Dolar Contado con Liqui",
"variacion": "1,08",
"ventaCero": "TRUE",
"decimales": "2"
}
},
{
"casa": {
"compra": "499,880",
"venta": "499,200",
"agencia": "313",
"nombre": "Dolar Bolsa",
"variacion": "0,780",
"ventaCero": "TRUE",
"decimales": "3"
}
},
{
"casa": {
"compra": "9.852,070",
"venta": "0",
"agencia": "399",
"nombre": "Bitcoin",
"variacion": "-100,00",
"ventaCero": "TRUE",
"decimales": "3"
}
},
{
"casa": {
"nombre": "Dolar turista",
"compra": "No Cotiza",
"venta": "494,45",
"agencia": "406",
"variacion": "0",
"ventaCero": "TRUE",
"decimales": "2"
}
},
{
"casa": {
"compra": "266,67",
"venta": "282,85",
"agencia": "302",
"nombre": "Dolar",
"decimales": "3"
}
},
{
"casa": {
"nombre": "Argentina",
"compra": "2.021,00",
"venta": "No Cotiza",
"mejor_compra": "True",
"mejor_venta": "False",
"fecha": "05/05/15",
"recorrido": "16:30",
"afluencia": {},
"agencia": "141",
"observaciones": {}
}
}
] */

