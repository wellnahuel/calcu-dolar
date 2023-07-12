"use client";

import React from "react";

interface FormProps {
    value: number
    onChange: (amount: number) => void;
}

function Form({value, onChange}: FormProps) {
    return (
        <form className="mb-2 w-full">
            <label>
                Monto en ARS:
                <input className="block rounded-md bg-gray-200 p-2 text-right w-full" 
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}>
                </input>
            </label>
        </form>
    )
}

export default Form;