"use client";

import React, { useState } from 'react';
import Card from '@/app/components/card';

const convert_bill_share = (total: number, your_share: number, money_from_bank: number) => {
    const  p = your_share / total
    const amount = p * money_from_bank
    return amount
}

export default function Project1() {
    const [total, setTotal] = useState('');
    const [yourShare, setYourShare] = useState('');
    const [moneyFromBank, setMoneyFromBank] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(-1);

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

    const reset = () => {
        setTotal('');
        setYourShare('');
        setMoneyFromBank('');
        setConvertedAmount(-1);
    }

  return (
        <Card title="Currency converter">
            <p> This is a currency converter that converts between two currencies. </p>
            <p> Input the total amount of the bill, your share of the bill and the amount taken from the bank account of the one who paid. </p>
            <p> The bill amounts will be in the visiting countries currency and the bank amount will be in your home currency.</p>
            <p> This is useful for splitting bills while on vacation in another country that uses a different currency than yours.</p>
        
        

            {convertedAmount !== -1 ? (
                <div className='flex flex-col justify-between w-max gap-1'>
                    <p>Converted Amount: {convertedAmount}</p>
                    <button className='bg-gray-100 hover:bg-slate-50' onClick={() => reset()}>Reset</button>
                </div>
            ): 
            <form className="bg-white text-black px-10 py-10 justify-between gap-5 flex flex-col">
                <input type="number" placeholder="Total (countries currency)" required value={total}
                onChange={(e) => setTotal(e.target.value)}/>
                <input type="number" placeholder="Your share (countries currency)" required value={yourShare}
                onChange={(e) => setYourShare(e.target.value)}/>
                <input type="number" placeholder="Money from bank (banks currency)"  required value={moneyFromBank}
                onChange={(e) => setMoneyFromBank(e.target.value)}/>
                <button className='hover:bg-slate-50' onClick={convert}>Convert</button>
            </form>}
        </Card>
  );
}
