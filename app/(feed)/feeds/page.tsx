'use client';
import React from 'react';
import NewsFeed from '@/components/Feed';

export default function Feed() {
  return (
    <main className="flex justify-around">
    {/* Centered container for categories and BlogCards */}
    <div className="flex w-2/3 justify-center ml-[6rem]">
      {/* Left side for categories */}
      {/* <Category /> */}

      {/* Right side for BlogCards */}
      <div className="w-3/4 p-4">
        {/* Search Bar */}
        <div className="flex items-center mb-4">
          {/* <Input
            type="text"
            placeholder="Search..."
            className=" w-96 ml-6"
          /> */}
        </div>

        {/* Inside the container, render your BlogCard components */}
        <NewsFeed />
        <NewsFeed />
        <NewsFeed />
        {/* Add more BlogCard components as needed */}
      </div>
    </div>
  </main>
  )
}
