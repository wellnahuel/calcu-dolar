"use client";

import Image from "next/image";
import cotizaciones from "./cotizaciones.json";
import { useState } from "react";

const valores = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>;

export default function Home() {
  const [amount, setAmount] = useState(0);

  return (
    <main className="flex gap-4 h-full">
      <section className="flex-1">
        
        {/* 
        
        <Form value={amount} onChange={(_amount:number) => setAmount(_amount)}/>
        
        */}
      
      </section>
      <section className="flex-1 rounded-3xl bg-sky-800 p-8 text-white overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {Object.entries(valores).map(
            ([name, value]: [string, { compra: number; venta: number }]) => (
              <li
                key={name}
                className="flex justify-between gap-4 items-center"
              >
                <div className="text-sm text-emerald-100">{name}</div>
                <div className="text-3xl font-bold text-emerald-300">
                  {Number(value.venta).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </main>
  );
}
