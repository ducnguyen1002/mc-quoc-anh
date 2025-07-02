"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Award, Users } from "lucide-react";

export default function Hero() {
	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		element?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToServices = () => {
		const element = document.querySelector("#services");
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

			{/* Neon Glow Effects */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
					{/* Left Column - Content */}
					<div className="text-center lg:text-left">
						<div className="flex items-center justify-center lg:justify-start mb-2 lg:mb-6">
							<div className="flex items-center space-x-2 bg-blue-500/10 px-2 py-1 lg:px-4 lg:py-2 rounded-full border border-blue-500/20">
								<Sparkles className="h-5 w-5 text-blue-400" />
								<span className="text-blue-400 text-sm font-medium">
									chuyên nghiệp
								</span>
							</div>
						</div>

						<h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-2 lg:mb-6 leading-tight">
							MC
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
								{" "}
								Quốc Anh
							</span>
						</h1>

						<p className="text-lg md:text-2xl text-gray-300 mb-4 lg:mb-8 max-w-2xl">
							Dẫn dắt những giây phút
							<span className="text-blue-400 font-semibold"> quan trọng</span> –
							Tạo nên dấu ấn
							<span className="text-purple-400 font-semibold"> khó quên</span>
						</p>

						<div className="flex gap-4 justify-center lg:justify-start mb-12">
							<Button
								onClick={scrollToContact}
								size="lg"
								className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:transform hover:scale-105"
							>
								Đặt lịch ngay
							</Button>
							<Button
								onClick={scrollToServices}
								size="lg"
								variant="outline"
								className="border-gray-600 text-blue-800  hover:text-blue-900 hover:border-blue-400 font-semibold px-8 py-4 rounded-full transition-all duration-300"
							>
								Xem dịch vụ
							</Button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
							<div
								className="text-center"
								data-aos="fade-up"
							>
								<div className="flex items-center justify-center mb-2">
									<Award className="h-6 w-6 text-blue-400" />
								</div>
								<div className="text-2xl font-bold text-white">500+</div>
								<div className="text-sm text-gray-400">Sự kiện thành công</div>
							</div>
							<div
								className="text-center"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<div className="flex items-center justify-center mb-2">
									<Users className="h-6 w-6 text-purple-400" />
								</div>
								<div className="text-2xl font-bold text-white">10K+</div>
								<div className="text-sm text-gray-400">Khách hàng</div>
							</div>
							<div
								className="text-center"
								data-aos="fade-up"
								data-aos-delay="400"
							>
								<div className="flex items-center justify-center mb-2">
									<Sparkles className="h-6 w-6 text-blue-400" />
								</div>
								<div className="text-2xl font-bold text-white">8</div>
								<div className="text-sm text-gray-400">Năm kinh nghiệm</div>
							</div>
						</div>
					</div>

					{/* Right Column - Image */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-2xl opacity-20 scale-110"></div>
							<div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
								<img
									src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
									alt="Quốc Anh - Professional MC"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
