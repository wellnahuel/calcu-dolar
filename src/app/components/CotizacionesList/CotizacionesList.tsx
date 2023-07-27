import { getCotizacion } from "@/app/data/services";
import { CasaType } from "@/app/models/cotizaciones.model";
import React, { useEffect, useState } from "react";
import Form from "../Form";

interface Props {
  lista: {
    casa: CasaType;
  }[];
}

function CotizacionesList({ lista }: Props) {
  const [amount, setAmount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getCotizacion();
      console.log("soy el result", result);
      setData(result);
    }
    fetchData();
  }, []);

  console.log("soy el form", amount); //chequeo que el form ande
  console.log("soy lista", lista);

  const calcularConversion = (valorVenta:string) => {
    //console.log(typeof(amount))
    console.log(amount + valorVenta);
    if (parseInt(valorVenta) != 0) {
      //console.log(valorVenta)
      //console.log(typeof(Number(valorVenta)))
      // console.log(amount)
      const conversion = amount/parseInt(valorVenta);
      //console.log(conversion)
      return conversion.toFixed(2);
    } else return 0
  };

  return (
    <div>
      <section className=" flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
      </section>
      <div className="flex justify-around max-[750px]:text-[80%] max-[600px]:w-[98%] max-[580px]:text-[60%]">
        <div>
          Tipo de Dolar
          {lista.length > 0 &&
            lista.map((t) => <p key={t.casa.agencia}>{t.casa.nombre} </p>)}
        </div>
        <div>
          Compra
          {lista.length > 0 &&
            lista.map((t) => (
              <div>
                {/*<div key={t.casa.agencia} className="max-[500px]:hidden">Compra:</div> */}
                <div key={t.casa.agencia}> $ {t.casa.compra} </div>
              </div>
            ))}
        </div>
        <div>
          Venta
          {lista.length > 0 &&
            lista.map((t) => <p key={t.casa.agencia}> $ {t.casa.venta} </p>)}
        </div>
        <div>
          {lista.length > 0 &&
            lista.map((t) => (
              <p key={t.casa.agencia}> {calcularConversion(t.casa.venta)}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CotizacionesList;

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
