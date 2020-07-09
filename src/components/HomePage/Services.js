import React, { Component } from "react";
import styled from "styled-components";

import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
export default class Services extends Component {
	state = {
		services: [
			{
				id: 1,
				icon: <FaDolly></FaDolly>,
				title: "free shipping",
				text:
					"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
			},
			{
				id: 2,
				icon: <FaRedo></FaRedo>,
				title: "30 days return policy",
				text:
					"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
			},
			{
				id: 3,
				icon: <FaDollarSign></FaDollarSign>,
				title: "secured payments",
				text:
					"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
			},
		],
	};

	render() {
		return (
			<ServicesWrapper className="py-5">
				<div className="container">
					<div className="row">
						{this.state.services.map((service) => {
							return (
								<div
									className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
									key={service.id}
								>
									<div className="service-icon">
										{service.icon}
									</div>
									<div className="mt-3 text-capitalize">
										{service.title}
									</div>
									<div className="mt-3">{service.text}</div>
								</div>
							);
						})}
					</div>
				</div>
			</ServicesWrapper>
		);
	}
}

const ServicesWrapper = styled.section`
	background: rgba(95, 182, 234, 0.5);
	.service-icon {
		font-size: 2.5rem;
		color: var(--primaryColor);
	}
	p {
		color: var(--darkGrey);
	}
`;
