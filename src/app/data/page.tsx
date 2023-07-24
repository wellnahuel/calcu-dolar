import React from "react";
import { getCotizacion } from "./services/cotizaciones.service";
import { CotizacionesList } from "../components/CotizacionesList";
//import ExchangeRates from "../components/ExchangeRates/ExchangeRates";

async function data() {
  const data = await getCotizacion();
  return (
  <div> {/* {JSON.stringify(data)} */} 
  <div>holi
    <CotizacionesList lista={data}/>
  </div>
   {/*  <ExchangeRates /> */}
  </div>
  );
}
export default data;
