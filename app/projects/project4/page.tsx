"use client";
import Nav from '@/app/components/nav';
import Card from '@/app/components/card';

export default function Project4() {
    let word = "hello";
    return (
        <Card title="Project 4">
            <p> This is a project that I am currently working on. </p>
            <p> Guess the correct word</p>

            <div>
                <input type="text" placeholder="Enter a word" required 
                onChange={(e) => word = e.target.value}/>
                <button className='hover:bg-slate-50' onClick={() => {
                    if (word === "hello") {
                        <p>Correct!</p>
                    } else {
                        <p>Incorrect</p>
                    }
                }}>Submit</button>
            </div>
        </Card>

    );
}