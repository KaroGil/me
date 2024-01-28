"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

const convert_bill_share = (total, your_share, money_from_bank) => {
    const  p = your_share / total
    const amount = p * money_from_bank
    return amount
}

export default function Project1() {
    const [total, setTotal] = useState('');
    const [yourShare, setYourShare] = useState('');
    const [moneyFromBank, setMoneyFromBank] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const convert = () => {
        // Validate input values
        if (parseFloat(total) <= 0) {
          alert('Please enter a total over 0');
          return;
        }

        // Perform conversion
        const converted = convert_bill_share(parseFloat(total), parseFloat(yourShare), parseFloat(moneyFromBank));
        setConvertedAmount(converted);
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-500 to-green-500">
        <div className="bg-white text-black px-10 py-10 w-1/2 justify-between gap-5 flex flex-col">
            <Link href="/" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> <RiHomeLine /> Home </Link>
            <h1 className="text-4xl font-bold">Currency converter</h1>
            <p> This is a currency converter that converts between two currencies. </p>
            <p> Input the total amount of the bill, your share of the bill and the amount taken from the bank account of the one who paid. </p>
            <p> The bill amounts will be in the visiting countries currency and the bank amount will be in your home currency.</p>
            <p> This is useful for splitting bills while on vacation in another country that uses a different currency than yours.</p>
        
        

            {convertedAmount !== null ? (
                <div className='flex flex-row justify-between w-max gap-1'>
                    <p>Converted Amount: {convertedAmount}</p>
                    <button className='hover:bg-slate-50' onClick={() => setConvertedAmount(null)}>Reset</button>
                </div>
            ): 
            <form className="bg-white text-black px-10 py-10 justify-between gap-5 flex flex-col">
                <input type="number" placeholder="Total" required value={total}
                onChange={(e) => setTotal(e.target.value)}/>
                <input type="number" placeholder="Your share" required value={yourShare}
                onChange={(e) => setYourShare(e.target.value)}/>
                <input type="number" placeholder="Money from bank"  required value={moneyFromBank}
                onChange={(e) => setMoneyFromBank(e.target.value)}/>
                <button className='hover:bg-slate-50' onClick={convert}>Convert</button>
            </form>}
        </div>
    </main>
  );
}
