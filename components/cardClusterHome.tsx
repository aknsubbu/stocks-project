import React from "react";
import HomeClusterCardPiece from "./homeClusterCardPiece";

export default function CardClusterHome() {
   const data=[{
        title: "Financials",
        header: "View the latest financials for any stock",
        path: "./card1.jpg",
    },
    {
        title:"Stock Price",
        header:"See and analyze the stock price for a stock of your choice",
        path:"./card2.jpg",
    },
    {
        title:"Key Metrics",
        header:"Read through the key metrics of the companies you are interested in",
        path:"./card3.jpg",

    },
    {
        title:"News",
        header:"View the latest news about the stock you picked",
        path:"./card4.jpg",
    },
    {
        title:"Upgrades and Downgrades",
        header:"See the latest upgrades and downgrades for any stock",
        path:"./card5.jpg",
    },
    {
        title:"Social Sentiment",
        header:"See the latest social sentiment for any stock",
        path:"./card6.jpg",
    }
]
  return (
    <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {data.map((item,index)=>(
            <HomeClusterCardPiece title={item.title} header={item.header} path={item.path} key={index} />
        ))}
  </div>
  );
}
