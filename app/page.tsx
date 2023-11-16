'use client'
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { SearchIcon } from "@/components/icons";
import CardClusterHome from "@/components/cardClusterHome";

export default function Home() {
	const [symbol, setSymbol] = useState("");
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block"  >
					Enter
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search Symbols..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
			value={symbol}
			onChange={(e) => setSymbol(e.target.value)}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					window.location.href = `/${symbol}`;
				}
			}}
			
		/>
	);
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-2xl text-center justify-center">
				<h1 className={title()}>Search for&nbsp;</h1>
				<br/>
				<h1 className={title({ color: "blue" })}>Stock&nbsp;</h1>
				<h1 className={title({ color: "yellow" })}>Symbols&nbsp;</h1>
				<br />
				<h1 className={title()}>
					to recieve comprehensive data on demand...
				</h1>
				<div className="p-5 w-full h-full">{searchInput}</div>
				
			</div>
			<div className="w-full px-10">
			<CardClusterHome />
			</div>
			

			


			
		</section>
	);
}
