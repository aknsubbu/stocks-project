import React from 'react';
import Marquee from 'react-fast-marquee';
import MarqueeCard from './MarqueeCard';
import { NewsArticle } from './interfaces';

const NewsMarquee = ({ news }: { news: NewsArticle[] }) => {
  return (
    <Marquee className='text-white' pauseOnHover >
      {news.map((article, index) => (
        <MarqueeCard key={index} {...article} />
      ))}
    </Marquee>
  );
};

export default NewsMarquee;
