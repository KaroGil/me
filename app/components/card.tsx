// components/ProjectLayout.jsx
import React from 'react';
import Nav from '@/app/components/nav';

interface CardProps {
    title: string;
    children: any;
}

export default function Card({ title, children }: CardProps){
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-gradient-to-br from-blue-500 to-green-500">
        <div className="bg-white text-black p-6 md:p-10 w-full max-w-sm md:max-w-md lg:max-w-lg  justify-between gap-5 flex flex-col">
            <Nav />
        {title && <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>}
        {children}
      </div>
    </main>
  );
};
