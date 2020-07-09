import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefualtPage";
import Cart from "./pages/CartPage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<Sidecart></Sidecart>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/contact" component={Contact}></Route>
				<Route path="/products" exact component={Products}></Route>
				<Route path="/products/:id" component={SingleProduct}></Route>
				<Route path="/cart" component={Cart}></Route>
				<Route component={Default}></Route>
			</Switch>
			<Footer></Footer>
		</>
	);
}

export default App;
