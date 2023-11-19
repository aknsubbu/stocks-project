export default function SymbolLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-3 md:py-3">
			<div className="inline-block w-full text-center justify-center">
				{children}
			</div>
		</section>
	);
}
