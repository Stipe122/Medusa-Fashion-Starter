"use client";
import type { HttpTypes } from "@medusajs/types";
import { Button, Heading } from "@medusajs/ui";
import CartTotals from "@modules/common/components/cart-totals";
import Link from "next/link";

type SummaryProps = {
	cart: HttpTypes.StoreCart & {
		promotions: HttpTypes.StorePromotion[];
	};
};

const Summary = ({ cart }: SummaryProps) => {
	return (
		<div className="flex flex-col gap-y-4">
			<Heading level="h2" className="text-[2rem] leading-[2.75rem]">
				Summary
			</Heading>
			<CartTotals totals={cart} />
			<Link href={"/cart"} data-testid="checkout-button">
				<Button className="w-full h-10">Go to checkout</Button>
			</Link>
		</div>
	);
};

export default Summary;
