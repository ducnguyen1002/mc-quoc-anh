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
			title: "Tiệc Gala",
			description:
				"Chương trình dẫn chuyên nghiệp cho tiệc gala doanh nghiệp, lễ trao giải và những bữa tiệc sang trọng để lại ấn tượng sâu sắc.",
			icon: Utensils,
			features: [
				"Trao giải thưởng",
				"Sự kiện doanh nghiệp",
				"Gala gây quỹ",
				"Tiệc VIP",
			],
			color: "from-blue-500 to-cyan-500",
			bgColor: "bg-blue-500/10",
			borderColor: "border-blue-500/20",
			image:
				"https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
		},
		{
			id: "grand-opening",
			title: "Khai Trương",
			description:
				"Dẫn chương trình sôi động và truyền cảm hứng cho lễ khai trương, ra mắt sản phẩm và các dấu mốc quan trọng trong kinh doanh.",
			icon: Scissors,
			features: [
				"Cắt băng khai trương",
				"Ra mắt sản phẩm",
				"Khai trương cửa hàng",
				"Kỷ niệm thành lập",
			],
			color: "from-purple-500 to-pink-500",
			bgColor: "bg-purple-500/10",
			borderColor: "border-purple-500/20",
			image:
				"https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
		},
		{
			id: "wedding",
			title: "Tiệc Cưới",
			description:
				"Dẫn chương trình giàu cảm xúc và mang tính cá nhân hóa, đảm bảo mọi khoảnh khắc trong ngày trọng đại đều suôn sẻ và trọn vẹn yêu thương.",
			icon: Heart,
			features: [
				"Dẫn tiệc cưới",
				"Hỗ trợ nghi lễ",
				"Điều phối phát biểu",
				"Kỷ niệm ngày cưới",
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
					<h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
						Dịch vụ <br /> MC chuyên nghiệp
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Từ những buổi tiệc ấm cúng đến sự kiện hoành tráng, tôi mang đến sự
						chuyên nghiệp, lôi cuốn và khả năng dẫn dắt chương trình mượt mà cho
						mọi sự kiện.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const IconComponent = service.icon;
						return (
							<Card
								data-aos="fade-up"
								data-aos-delay={index * 200}
								key={service.id}
								className={`group bg-gray-800/50 border-gray-700 hover:${service.borderColor} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
							>
								<div className="relative h-48 overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
									<div
										className={`absolute top-4 left-4 ${service.bgColor} ${service.borderColor} border rounded-full p-3`}
									>
										<IconComponent className="h-6 w-6 text-white" />
									</div>
								</div>

								<CardHeader>
									<CardTitle
										className={`"text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.color} transition-all duration-300"`}
									>
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
										Đặt Dịch Vụ
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="text-center mt-16">
					<div
						data-aos="zoom-in"
						className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto"
					>
						<h3 className="text-2xl font-bold text-white mb-4">
							Cần Giải Pháp Riêng?
						</h3>
						<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
							Mỗi sự kiện đều đặc biệt. Hãy cùng trao đổi để tạo nên một chương
							trình phù hợp và vượt xa kỳ vọng của bạn.
						</p>
						<Button
							onClick={scrollToContact}
							size="lg"
							className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
						>
							Trao Đổi Ngay
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
