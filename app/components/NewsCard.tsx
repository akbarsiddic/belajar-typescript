"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface News {
  title: string;
  description: string;
    urlToImage: string;
}

const NewsCard = () => {
  const [data, setData] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://newsapi.org/v2/everything?q=technology&apiKey=ea699407926a471dad405f0701aae166'
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();
        setData(result.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {data.map((article, index) => (
        <div key={index}>
          <Image
            className="w-full"
            width={500}
            height={500}
            loader={ () => article.urlToImage}
            src={article.urlToImage}
            alt={article.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <p className="text-gray-700 text-base">{article.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
