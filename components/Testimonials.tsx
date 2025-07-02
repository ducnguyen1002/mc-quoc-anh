"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			id: 1,
			name: "Chị Minh Ngân",
			role: "Giám đốc sự kiện, TechCorp",
			role_vi: "Giám đốc sự kiện, TechCorp",
			image:
				"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
			rating: 5,
			text: "MC Quốc Anh đã khiến buổi tiệc gala thường niên của chúng tôi trở nên hoàn hảo. Sự chuyên nghiệp và khả năng kết nối với khán giả thật sự ấn tượng. Mọi khoảnh khắc diễn ra liền mạch và cuốn hút.",
			event: "Corporate Gala Dinner",
			event_vi: "Tiệc Gala Doanh nghiệp",
		},
		{
			id: 2,
			name: "Anh Việt Anh",
			role: "Store Owner, Luxe Boutique",
			role_vi: "Chủ cửa hàng, Luxe Boutique",
			image:
				"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
			rating: 5,
			text: "Năng lượng mà MC Quốc Anh mang lại trong lễ khai trương của chúng tôi thật tuyệt vời! Anh ấy khuấy động không khí và tạo sự hào hứng cho khách mời. Doanh số vượt xa mong đợi!",
			event: "Grand Opening",
			event_vi: "Lễ Khai Trương",
		},
		{
			id: 3,
			name: "Anh Đức & Minh Ánh",
			role: "Happy Couple",
			role_vi: "Cặp đôi hạnh phúc",
			image:
				"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
			rating: 5,
			text: "Ngày cưới của chúng tôi thật hoàn hảo nhờ MC Quốc Anh. Anh ấy điều phối mọi thứ rất chuyên nghiệp, khiến chúng tôi chỉ việc tận hưởng mà không lo lắng điều gì.",
			event: "Wedding Reception",
			event_vi: "Tiệc Cưới",
		},
		{
			id: 4,
			name: "Anh Nhật Minh",
			role: "CEO, Innovation Labs",
			role_vi: "Giám đốc điều hành, Innovation Labs",
			image:
				"https://images.pexels.com/photos/1043424/pexels-photo-1043424.jpeg?auto=compress&cs=tinysrgb&w=400",
			rating: 5,
			text: "MC Quốc Anh đã dẫn dắt ba sự kiện lớn cho chúng tôi và lần nào cũng xuất sắc. Sự chuẩn bị kỹ lưỡng và phong cách dẫn dắt linh hoạt khiến anh ấy trở thành MC tốt nhất mà chúng tôi từng làm việc cùng.",
			event: "Product Launch",
			event_vi: "Ra mắt sản phẩm",
		},
		{
			id: 5,
			name: "Chị Huyền Trang",
			role: "Charity Director, Hope Foundation",
			role_vi: "Giám đốc từ thiện, Hope Foundation",
			image:
				"https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
			rating: 5,
			text: "Trong sự kiện gây quỹ, MC Quốc Anh đã cân bằng tuyệt vời giữa sự giải trí và chân thành. Nhờ anh ấy, chúng tôi đã gây quỹ vượt mục tiêu đến 40%. Một người chuyên nghiệp thực sự có tâm.",
			event: "Fundraising Gala",
			event_vi: "Đêm Gala Gây Quỹ",
		},
	];

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextTestimonial();
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="testimonials"
			className="py-20 bg-gradient-to-b from-gray-900 to-black"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
						Khách hàng nói gì?
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Đừng chỉ nghe từ tôi — hãy xem những cảm nhận thực tế từ các nhà tổ
						chức sự kiện và cặp đôi từng hợp tác cùng tôi.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					<Card className="bg-gray-800/50 border-gray-700 p-8 md:p-12">
						<CardContent className="p-0">
							<div className="flex items-start mb-6">
								<Quote className="h-12 w-12 text-blue-400 mr-4 flex-shrink-0 mt-2" />
								<div className="flex-1">
									<div className="flex items-center mb-4">
										{[...Array(testimonials[currentIndex].rating)].map(
											(_, i) => (
												<Star
													key={i}
													className="h-5 w-5 text-yellow-400 fill-current"
												/>
											)
										)}
									</div>
									<p className="text-lg md:text-lg text-gray-300 leading-relaxed mb-6">
										&quot;{testimonials[currentIndex].text}&quot;
									</p>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<img
										src={testimonials[currentIndex].image}
										alt={testimonials[currentIndex].name}
										className="w-16 h-16 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="text-white font-semibold text-lg">
											{testimonials[currentIndex].name}
										</h4>
										<p className="text-gray-400">
											{testimonials[currentIndex].role_vi}
										</p>
										<p className="text-blue-400 text-sm">
											{testimonials[currentIndex].event_vi}
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-2">
									<Button
										onClick={prevTestimonial}
										variant="ghost"
										size="icon"
										className="text-gray-400 hover:text-white hover:bg-gray-700"
									>
										<ChevronLeft className="h-5 w-5" />
									</Button>
									<Button
										onClick={nextTestimonial}
										variant="ghost"
										size="icon"
										className="text-gray-400 hover:text-white hover:bg-gray-700"
									>
										<ChevronRight className="h-5 w-5" />
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Chỉ số chuyển slide */}
					<div className="flex justify-center mt-8 space-x-2">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full transition-colors duration-200 ${
									index === currentIndex ? "bg-blue-400" : "bg-gray-600"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
