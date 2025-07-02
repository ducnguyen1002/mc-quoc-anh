"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Utensils, Scissors, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
	const services = [
		{
			id: "gala-dinner",
			title: "Gala Dinners",
			description:
				"Sophisticated hosting for corporate galas, award ceremonies, and elegant dining experiences that leave lasting impressions.",
			icon: Utensils,
			features: [
				"Award Presentations",
				"Corporate Events",
				"Fundraising Galas",
				"VIP Dinners",
			],
			color: "from-blue-500 to-cyan-500",
			bgColor: "bg-blue-500/10",
			borderColor: "border-blue-500/20",
			image:
				"https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
		},
		{
			id: "grand-opening",
			title: "Grand Openings",
			description:
				"Dynamic and energetic hosting for business launches, store openings, and milestone celebrations that create buzz.",
			icon: Scissors,
			features: [
				"Ribbon Cuttings",
				"Product Launches",
				"Store Openings",
				"Business Milestones",
			],
			color: "from-purple-500 to-pink-500",
			bgColor: "bg-purple-500/10",
			borderColor: "border-purple-500/20",
			image:
				"https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
		},
		{
			id: "wedding",
			title: "Weddings",
			description:
				"Heartfelt and personalized hosting for your special day, ensuring every moment flows seamlessly with love and joy.",
			icon: Heart,
			features: [
				"Reception Hosting",
				"Ceremony Support",
				"Toast Coordination",
				"Anniversary Celebrations",
			],
			color: "from-rose-500 to-red-500",
			bgColor: "bg-rose-500/10",
			borderColor: "border-rose-500/20",
			image:
				"https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
		},
	];

	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="services"
			className="py-20 bg-gradient-to-b from-black to-gray-900"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Premium MC Services
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						From intimate gatherings to grand celebrations, I bring
						professionalism, charisma, and seamless execution to every event.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => {
						const IconComponent = service.icon;
						return (
							<Card
								key={service.id}
								className={`group bg-gray-800/50 border-gray-700 hover:${service.borderColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
							>
								<div className="relative h-48 overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
									<div
										className={`absolute top-4 left-4 ${service.bgColor} ${service.borderColor} border rounded-full p-3`}
									>
										<IconComponent className="h-6 w-6 text-white" />
									</div>
								</div>

								<CardHeader>
									<CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.color} transition-all duration-300">
										{service.title}
									</CardTitle>
									<CardDescription className="text-gray-300">
										{service.description}
									</CardDescription>
								</CardHeader>

								<CardContent>
									<ul className="space-y-2 mb-6">
										{service.features.map((feature, index) => (
											<li
												key={index}
												className="flex items-center text-gray-300"
											>
												<ArrowRight className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
												{feature}
											</li>
										))}
									</ul>

									<Button
										onClick={scrollToContact}
										className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg hover:shadow-blue-500/25 text-white font-semibold transition-all duration-300`}
									>
										Book This Service
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="text-center mt-16">
					<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
						<h3 className="text-2xl font-bold text-white mb-4">
							Need a Custom Solution?
						</h3>
						<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
							Every event is unique. Let's discuss your specific needs and
							create a tailored experience that exceeds your expectations.
						</p>
						<Button
							onClick={scrollToContact}
							size="lg"
							className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
						>
							Let's Talk
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
