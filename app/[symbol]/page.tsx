'use client'
import React,{useState,useEffect} from 'react'
import {Card, CardHeader, CardBody, CardFooter, card,Image} from "@nextui-org/react";
import SymbolCardCompanyInfo from '@/components/SymbolCardCompanyInfo'
import { title, subtitle } from "@/components/primitives";
const finnhub = require('finnhub');

interface CompanyInfoProps {
    country: string;
    currency: string;
    exchange: string;
    ipo: string;
    marketCapitalization: number;
    name: string;
    phone: string;
    shareOutstanding: number;
    ticker: string;
    weburl: string;
    logo: string;
    finnhubIndustry: string;
  }

export default function Page({ params }: { params: { symbol: string } }) {
    const [companyInfo, setCompanyInfo] = useState<CompanyInfoProps>({
        "country": "US",
        "currency": "USD",
        "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
        "ipo": "1980-12-12",
        "marketCapitalization": 1415993,
        "name": "Apple Inc",
        "phone": "14089961010",
        "shareOutstanding": 4375.47998046875,
        "ticker": "AAPL",
        "weburl": "https://www.apple.com/",
        "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
        "finnhubIndustry":"Technology"
      });


    // ! Data Pull
    // useEffect(() => {

    //     const fetchData = async () => {
    //             const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    //             api_key.apiKey = "clapl7hr01qi1291auagclapl7hr01qi1291aub0"
    //             const endpoint = new finnhub.DefaultApi()
    //                 endpoint.companyProfile2(params.symbol, (error: any, data: any, response: any) => {
                        
    //                         console.log(data)
    //                         setCompanyInfo(data)
    //                      if (error) {
    //                         console.log(error)
    //                     }
                     
    //                     })
    //                 }
    //                 if(!companyInfo){
    //                     fetchData();
    //                 }
    //             },[companyInfo,params.symbol]);
 

    const symbolHeader=(
        <Card>
            <CardHeader >
                <Image src={companyInfo?.logo} width={50} height={50} alt="Symbol Image" className='p-1'/>
                <h1 className={title({ color: "blue" })}>&nbsp;&nbsp;{params.symbol}</h1> 

            </CardHeader>
            <CardBody>
                
            </CardBody>
        </Card>
    
    )

    return(
        <div className='w-full h-full'>
        {symbolHeader}


    
         <SymbolCardCompanyInfo {...companyInfo} />
         </div>
         )
    }
  