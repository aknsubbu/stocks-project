'use client'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import { CompanyInfoProps } from "./interfaces";

const SymbolCardCompanyInfo = (companyInfo: CompanyInfoProps) => {
  const {
    country,
    currency,
    exchange,
    ipo,
    marketCapitalization,
    name,
    phone,
    shareOutstanding,
    weburl,
    finnhubIndustry,
  } = companyInfo;

  return (

    <Card className="max-w-[400px] mt-10">
      <CardHeader className="flex gap-3 pt-5">
        <div className="flex flex-col">
          <p className="text-small text-default-500">{name}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Country:</span>
          <span style={{ float: 'right' }}>{country}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Currency:</span>
          <span style={{ float: 'right' }}>{currency}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Exchange:</span>
          <span style={{ float: 'right' }}>{exchange}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>IPO Date:</span>
          <span style={{ float: 'right' }}>{new Date(ipo).toLocaleDateString()}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Market Capitalization:</span>
          <span style={{ float: 'right' }}>{marketCapitalization}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Country:</span>
          <span style={{ float: 'right' }}>{country}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Phone:</span>
          <span style={{ float: 'right' }}>{phone}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Outstanding Shares:</span>
          <span style={{ float: 'right' }}>{shareOutstanding}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Industry:</span>
          <span style={{ float: 'right' }}>{finnhubIndustry}</span>
          </p>

      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={weburl}
        >
          Visit {name}.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SymbolCardCompanyInfo;
