import React from 'react'
import { StockData } from './interfaces'
import { title, subtitle } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  card,
  Image,
  Divider
} from "@nextui-org/react";

const QuoteCard = (quote:StockData) => {
  return (

        <Card className="max-w-[400px] min-w-[300px] mt-10 ml-10">
        <CardHeader className="flex gap-3 pt-5">
          <div className="flex flex-col">
            <p className="text-small text-default-500">Quote Data</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
        <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Stock Open: </span>
          <span style={{ float: 'right' }}>{quote.o}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Stock Close:</span>
          <span style={{ float: 'right' }}>{quote.c}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Stock High:</span>
          <span style={{ float: 'right' }}>{quote.h}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Stock Low:</span>
          <span style={{ float: 'right' }}>{quote.l}</span>
          </p>
          <p className="text-small text-default-500">
          <span style={{ float: 'left' }}>Stock Previous Close:</span>
          <span style={{ float: 'right' }}>{quote.pc}</span>
          </p>


        </CardBody>

      </Card>
    )
}

export default QuoteCard