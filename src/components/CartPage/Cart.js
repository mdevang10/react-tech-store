import React from "react";

import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default function Cart() {
	return (
		<section className="py-5">
			{/* Title */}
			<div className="container">
				<Title title="your cart items" center="true"></Title>
			</div>
			{/* cart columns */}
			<CartColumns></CartColumns>
			{/* cart list */}
			<CartList></CartList>
			{/* cart total */}
			<CartTotal></CartTotal>
		</section>
	);
}
