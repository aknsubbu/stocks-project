import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


interface HomeClusterCardPieceProps {
    title: string;
    header: string;
    path: string;
  }

const HomeClusterCardPiece: React.FC<HomeClusterCardPieceProps> = ({ title, header, path }) => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
        <h4 className="text-white font-medium text-large">{header}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={path}
      />
    </Card>
  )
}

export default HomeClusterCardPiece