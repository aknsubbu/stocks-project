import React from 'react';
import { Card, CardHeader, CardBody, Link, Image } from '@nextui-org/react';
import { subtitle } from '@/components/primitives';
import { NewsArticle } from '@/components/interfaces';

const MarqueeCard: React.FC<NewsArticle> = ({ image, headline, url, source }) => {
  return (
    <Card className='  h-40 mx-10 mb-10 '>
      <Link href={url}>
      <div className="flex flex-col p-8 rounded-2xl">
      <div className="flex">
        <div className="flex gap-4">
<Image src={image} alt="" width={100}/>          
<div className="flex  gap-1">
            <div className="flex flex-col gap-3 items-center -mt-1 justify-center ">
              <p className="font-semibold cursor-pointer">{source}</p>
              <div className="italic mt-2 text-[18px] w-40 text-[#4b587c]  font-normal">
        <h1 className='line-clamp-3'>{headline}</h1>
      </div>
            </div>
          </div>
        </div>
      </div>
      
      
     </div>

      </Link>
    </Card>
  );
};

export default MarqueeCard;
