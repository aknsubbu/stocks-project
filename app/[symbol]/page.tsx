"use client";
//packages
import React, { useState, useEffect } from "react";
import { title, subtitle } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  card,
  Image,
} from "@nextui-org/react";
//components
import SymbolCardCompanyInfo from "@/components/SymbolCardCompanyInfo";
import NewsMarquee from "@/components/NewsMarquee";
import QuoteCard from "@/components/QuoteCard";
import { CompanyInfoProps, StockData,FinancialsProps ,NewsArticle} from "@/components/interfaces";
//data
const finnhub = require("finnhub");


export default function Page({ params }: { params: { symbol: string } }) {
  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "clapl7hr01qi1291auagclapl7hr01qi1291aub0"
const finnhubClient = new finnhub.DefaultApi()

  //states
  const [companyInfo, setCompanyInfo] = useState<CompanyInfoProps>({
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "1980-12-12",
    marketCapitalization: 1415993,
    name: "Apple Inc",
    phone: "14089961010",
    shareOutstanding: 4375.47998046875,
    ticker: "AAPL",
    weburl: "https://www.apple.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Technology",
  });

  const [stockData, setStockData] = useState<StockData>({
    c: 133.11,
    h: 133.611,
    l: 131.07,
    o: 132.52,
    pc: 131.46,
    t: 1623356400,
  });

  const [news, setNews] = useState<NewsArticle[]>([{
    "category": "company news",
    "datetime": 1569550360,
    "headline": "More sops needed to boost electronic manufacturing: Top govt official More sops needed to boost electronic manufacturing: Top govt official.  More sops needed to boost electronic manufacturing: Top govt official More sops needed to boost electronic manufacturing: Top govt official",
    "id": 25286,
    "image": "https://img.etimg.com/thumb/msid-71321314,width-1070,height-580,imgsize-481831,overlay-economictimes/photo.jpg",
    "related": "AAPL",
    "source": "The Economic Times India",
    "summary": "NEW DELHI | CHENNAI: India may have to offer electronic manufacturers additional sops such as cheap credit and incentives for export along with infrastructure support in order to boost production and help the sector compete with China, Vietnam and Thailand, according to a top government official.These incentives, over and above the proposed reduction of corporate tax to 15% for new manufacturing units, are vital for India to successfully attract companies looking to relocate manufacturing facilities.“While the tax announcements made last week send a very good signal, in order to help attract investments, we will need additional initiatives,” the official told ET, pointing out that Indian electronic manufacturers incur 8-10% higher costs compared with other Asian countries.Sops that are similar to the incentives for export under the existing Merchandise Exports from India Scheme (MEIS) are what the industry requires, the person said.MEIS gives tax credit in the range of 2-5%. An interest subvention scheme for cheaper loans and a credit guarantee scheme for plant and machinery are some other possible measures that will help the industry, the official added.“This should be 2.0 (second) version of the electronic manufacturing cluster (EMC) scheme, which is aimed at creating an ecosystem with an anchor company plus its suppliers to operate in the same area,” he said.Last week, finance minister Nirmala Sitharaman announced a series of measures to boost economic growth including a scheme allowing any new manufacturing company incorporated on or after October 1, to pay income tax at 15% provided the company does not avail of any other exemption or incentives.",
    "url": "https://economictimes.indiatimes.com/industry/cons-products/electronics/more-sops-needed-to-boost-electronic-manufacturing-top-govt-official/articleshow/71321308.cms"
  },
  {
    "category": "company news",
    "datetime": 1569528720,
    "headline": "How to disable comments on your YouTube videos in 2 different ways",
    "id": 25287,
    "image": "https://amp.businessinsider.com/images/5d8d16182e22af6ab66c09e9-1536-768.jpg",
    "related": "AAPL",
    "source": "Business Insider",
    "summary": "You can disable comments on your own YouTube video if you don't want people to comment on it. It's easy to disable comments on YouTube by adjusting the settings for one of your videos in the beta or classic version of YouTube Studio. Visit Business Insider's homepage for more stories . The comments section has a somewhat complicated reputation for creators, especially for those making videos on YouTube . While it can be useful to get the unfiltered opinions of your YouTube viewers and possibly forge a closer connection with them, it can also open you up to quite a bit of negativity. So it makes sense that there may be times when you want to turn off the feature entirely. Just keep in mind that the action itself can spark conversation. If you decide that you don't want to let people leave comments on your YouTube video, here's how to turn off the feature, using either the classic or beta version of the creator studio: How to disable comments on YouTube in YouTube Studio (beta) 1. Go to youtube.com and log into your account, if necessary. 2.",
    "url": "https://www.businessinsider.com/how-to-disable-comments-on-youtube"
  },]);
  const [financials, setFinancials] = useState<FinancialsProps[]>([{
    "series": {
     "annual": {
       "currentRatio": [
         {
           "period": "2019-09-28",
           "v": 1.5401
         },
         {
           "period": "2018-09-29",
           "v": 1.1329
         }
       ],
       "salesPerShare": [
         {
           "period": "2019-09-28",
           "v": 55.9645
         },
         {
           "period": "2018-09-29",
           "v": 53.1178
         }
       ],
       "netMargin": [
         {
           "period": "2019-09-28",
           "v": 0.2124
         },
         {
           "period": "2018-09-29",
           "v": 0.2241
         }
       ]
     }
   },
   "metric": {
     "10DayAverageTradingVolume": 32.50147,
     "52WeekHigh": 310.43,
     "52WeekLow": 149.22,
     "52WeekLowDate": "2019-01-14",
     "52WeekPriceReturnDaily": 101.96334,
     "beta": 1.2989,
   },
   "metricType": "all",
   "symbol": "AAPL"
 }]);
  
//data pull
useEffect(() => {
  // Initialize an array to store cancellation tokens for API requests
  let cancelTokens: (() => void)[] = [];

  const fetchCompanyProfile = async () => {
    try {
      const data = await new Promise((resolve, reject) => {
        const cancelToken = finnhubClient.companyProfile2(
          { symbol: params.symbol },
          (error: any, data: any, response: any) => {
            if (data) {
              console.log("company profile");
              console.log(data);
              resolve(data);
            } else {
              console.log(error);
              reject(error);
            }
          }
        );

        cancelTokens.push(cancelToken);
      });

      setCompanyInfo(data as CompanyInfoProps);
    } catch (error) {
      console.log(error);    
    }
  };


  //   const cancelToken = finnhubClient.quote(params.symbol, (error:any, data:any, response:any) => {
  //     if (data) {
  //       console.log("quote");
  //       console.log(data);
  //       setStockData(data);
  //     } else {
  //       console.log(error);
  //     }
  //   });

  //   // Store the cancellation token
  //   cancelTokens.push(cancelToken);
  // };

  const fetchQuote = async () => {
    try{
      const data = await new Promise((resolve, reject) => {
        const cancelToken = finnhubClient.quote(params.symbol, (error:any, data:any, response:any) => {
          if (data) {
            console.log("quote");
            console.log(data);
            resolve(data);
          } else {
            console.log(error);
            reject(error);
          }
        });
  
        cancelTokens.push(cancelToken);
      });
  
      setStockData(data as StockData);
    } catch (error) {
      console.log(error)
    }
  };
  
  const fetchCompanyNews = async () => {
    try{
      const data= await new Promise((resolve, reject) => {
        const cancelToken = finnhubClient.companyNews(params.symbol, "2023-01-01", "2023-03-01", (error:any, data:any, response:any) => {
          if (data) {
            console.log("news");
            console.log(data);
            resolve(data);
          } else {
            console.log(error);
            reject(error);
          }
        });
  
        cancelTokens.push(cancelToken);
      });
      setNews(data as NewsArticle[]);
    }catch(error){
      console.log(error)
    }
  };

  const fetchFinancials = async () => {
    try{
      const data= await new Promise((resolve, reject) => {
        const cancelToken = finnhubClient.companyBasicFinancials(params.symbol, "all", (error:any, data:any, response:any) => {
          if (data) {
            console.log("financials");
            console.log(data);
            resolve(data);
          } else {
            console.log(error);
            reject(error);
          }
        });
  
        cancelTokens.push(cancelToken);
      });
      setFinancials(data as FinancialsProps[]);
    }catch(error){
      console.log(error)
    }
  };

  const fetchData = async () => {
    await fetchCompanyProfile();
    await fetchQuote();
    await fetchCompanyNews();
    await fetchFinancials();
  };

  fetchData();

  return () => {
    // Cancel all ongoing API requests
    cancelTokens.forEach((cancelToken) => {
      if (typeof cancelToken === 'function') {
        cancelToken(); // Call the cancellation function
      }
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []); 
  

  

  const symbolHeader = (
    <Card>
      <CardHeader>
        <div className="flex flex-row w-full">
          <div className="flex">
          <Image src={companyInfo?.logo}   width={100} alt="Symbol Image" className=" " />
          
          </div>
          <div className="flex flex-col justify-start items-start pl-5 ">
          <h1 className={title({ color: "foreground" })}>
            &nbsp;&nbsp;{companyInfo.name}
          </h1>
          <h1 className={subtitle({})}>
          &nbsp;&nbsp;{companyInfo.ticker} ({companyInfo?.exchange})
          </h1>
          </div>
          <div className="flex flex-col items-end grow justify-center ">
            <div className="flex flex-row">
            <h1 className={title({color:"foreground"})}>
                {stockData.c} 
              </h1>
              <h1 className={subtitle({})}>
                <span className="justify-start items-start pl-5">
                {companyInfo.currency}
                </span>
              </h1>
            </div>
          </div>
        </div>
        
      </CardHeader>
    </Card>
  );


  
  return (
    <div className="w-full h-full flex flex-col">
      <NewsMarquee news={news}/>
      {symbolHeader}
      <div className="flex flex-row">
      <SymbolCardCompanyInfo {...companyInfo} />
      <QuoteCard {...stockData} />
      </div>
    </div>
  );
}
