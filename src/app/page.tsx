/* eslint-disable @next/next/no-async-client-component */
"use client";

import Image from "next/image";
import React from "react";

import cotizaciones from "./cotizaciones.json";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import CotizacionesList from "./components/CotizacionesList/CotizacionesList";
import { getCotizacion } from "./data/services/cotizaciones.service";

/* const valores = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>; */
//


function Home() {
  const [amount, setAmount] = useState(0);  
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const result = await getCotizacion();
        setData(result);
    }

    fetchData();
  }, []);

  return (
    <main className="">  
      <section className=" flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
      </section>    
      {data && <div>
        <CotizacionesList lista={data} />
      </div>}
    </main>
  );
}

export default Home;

/* 

{Object.entries(valores).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;
              return (
                <li
                  key={name}
                  className="flex justify-between gap-4 items-center"
                >
                  <div className="text-sm text-emerald-100">{name}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (
                      <div className="text-xl font-bold text-emerald-500">
                        {Number(total).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    ) : null}
                  </div>
                  <div className="text-3xl font-bold text-emerald-300">
                    {Number(value.venta).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </div>
                </li>
              );
            }
          )}

*/

/* 

 return (
    <main className="grid gap-4 h-full">
      <section className=" flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
      </section>
      <section className="flex-1 rounded-3xl bg-sky-800 p-8 text-white overflow-y-auto">
        <ul className="flex flex-col gap-4">
          <CotizacionesList lista={data} />
        </ul>
      </section>
    </main>
  );

*/
