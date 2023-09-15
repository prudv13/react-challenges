import React, { useEffect, useState } from "react";

// api -->`https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

const CurrencyConvert = () => {
    const [amount, setAmount] = useState(1);
    const [fromCur, setFromCur] = useState('INR');
    const [toCur, setToCur] = useState('USD');
    const [converted, setConverted] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function convert() {
            try {
                setIsLoading(true);
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`);
                const data = await res.json();
                setConverted(data.rates[toCur]);
                setIsLoading(false);
            }
            catch(error){
                console.log(error)
            }
        }
        if( fromCur === toCur) return setConverted(amount);
        convert();
    }, [amount, toCur, fromCur]);

  return (
    <div className="d-flex flex-column gap-4">
        <h1>Currency Converter</h1>
        <div className="d-flex">
            <input
                type="text"
                className="form-control"
                placeholder="Enter the amount"
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
            />

            <select 
                value={fromCur}
                onChange={e => setFromCur(e.target.value)}
                class="form-select form-select-lg" 
                aria-label="Large select"
            >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
            </select>

            <select 
                value={toCur}
                onChange={e => setToCur(e.target.value)}
                class="form-select form-select-lg" 
                aria-label="Large select"
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="CAD">CAD</option>
            </select>
        </div>
        <div className="form-control d-flex p-4 gap-3">
            <h4 className="m-auto">OUTPUT</h4>
            <h6 className="form-control m-auto">
            {
                isLoading ?
                <span>Loading . . .</span> :
                <span>{converted} {toCur}</span>
            }
            </h6>
        </div>
    </div>
  );
};

export default CurrencyConvert;
