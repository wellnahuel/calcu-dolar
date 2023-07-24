"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ExchangeRate {
  casa: string;
  compra: string;
  venta: string;
  agencia: string;
  variacion: string;
}


const ExchangeRates: React.FC = () => {
    const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<ExchangeRate[]>(
            'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
          );
          setExchangeRates(response.data);
        } catch (error) {
          console.error('Error fetching exchange rates:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Lista de Cotizaciones del Dólar</h1>
        <ul>
          {exchangeRates.map((rate, index) => (
            <li key={index}>
              <strong>{rate.casa}</strong>
              <br />
              Compra: {rate.compra}
              <br />
              Venta: {rate.venta}
              <br />
              Agencia: {rate.agencia}
              <br />
              Variación: {rate.variacion}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExchangeRates;
  