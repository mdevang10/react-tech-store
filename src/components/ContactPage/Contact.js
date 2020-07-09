import React from "react";
import Title from "../Title";
export default function Contact() {
	return (
		<section className="py-5">
			<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3">
					<Title title="contact us"></Title>
					<form
						className="mt-5"
						action="https://formspree.io/mvowwdda"
						method="POST"
					>
						{/* first */}
						<div className="form-group">
							<input
								type="text"
								name="firstname"
								className="form-control"
								placeholder="Enter your name"
							></input>
						</div>
						{/* email */}
						<div className="form-group">
							<input
								type="email"
								name="email"
								className="form-control"
								placeholder="email@hostname.com"
							></input>
						</div>
						{/* subject */}
						<div className="form-group">
							<input
								type="text"
								name="subject"
								className="form-control"
								placeholder="Enter the Subject"
							></input>
						</div>
						{/* message */}
						<div className="form-group">
							<textarea
								name="message"
								className="form-control"
								placeholder="Enter the message"
								rows="10"
							></textarea>
						</div>
						{/* submit */}
						<div className="form-group mt-3">
							<input
								type="submit"
								value="send"
								className="form-control bg-primary text-white"
							></input>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
