export interface StockData {
    c: number; // Closing price
    h: number; // High price
    l: number; // Low price
    o: number; // Open price
    pc: number; // Previous close
    t: number; // Timestamp
  }
  
export interface CompanyInfoProps {
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

export interface NewsArticle {
    category: string;
    datetime: number;
    headline: string;
    id: number;
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
    }

  export interface FinancialsProps {
    series: {
      annual: {
        currentRatio: FinancialsItem[];
        salesPerShare: FinancialsItem[];
        netMargin: FinancialsItem[];
      };
    };
    metric: {
      '10DayAverageTradingVolume': number;
      '52WeekHigh': number;
      '52WeekLow': number;
      '52WeekLowDate': string; // Assuming it's a string representing a date
      '52WeekPriceReturnDaily': number;
      'beta': number;
    };
    metricType: string;
    symbol: string;
  }
  
  interface FinancialsItem {
    period: string;
    v: number;
  }
    
export interface FetchDataResult {
    companyInfo: CompanyInfoProps;
    stockData: StockData;
    news: NewsArticle;
    financials: FinancialsProps;
  }