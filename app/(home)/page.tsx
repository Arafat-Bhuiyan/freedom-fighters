'use client';
import React from 'react';
import Slideshow from '@/components/Slideshow';
import { Image } from '@nextui-org/react';
import '@/styles/style.scss';

export default function Home() {
    return (
        <main className="grid justify-around">
            <Slideshow />

            <div className="scrolling-text bg-red-800">
                <p className='text-white text-lg'>
                    During the Bangladesh Liberation War of 1971, courageous freedom fighters of Bangladesh fought against the oppressive rule of Pakistan. They endured immense hardships, made enormous sacrifices, and displayed unwavering resolve to secure the nation's independence. Their valiant struggle led to the birth of Bangladesh as an independent nation on December 16, 1971. The freedom fighters' determination and sacrifice continue to inspire generations and stand as a testament to the indomitable spirit of the Bangladeshi people.
                </p>
            </div>

            <section className='container mx-auto my-4'>
                <div className='w-full border rounded-lg overflow-hidden shadow-lg flex bg-green-800'>
                    <div className='relative w-1/2'>
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl w-65 h-65"
                            src="/images/mujib.png"
                        />
                    </div>

                    <div className='p-4 w-1/2 text-white flex flex-col justify-center'>
                        <h3 className='text-xl font-semibold px-4 py-4'>Welcome to Bangladesh Freedom Fighters Story</h3>
                        <p className='text-gray-300 px-4'>
                            During the Bangladesh Liberation War of 1971, courageous freedom fighters of Bangladesh fought against the oppressive rule of Pakistan. They endured immense hardships, made enormous sacrifices, and displayed unwavering resolve to secure the nation's independence. Their valiant struggle led to the birth of Bangladesh as an independent nation on December 16, 1971. The freedom fighters' determination and sacrifice continue to inspire generations and stand as a testament to the indomitable spirit of the Bangladeshi people.
                        </p>
                    </div>
                </div>
            </section>


            

        </main>
    )
}
