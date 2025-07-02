"use client";

import { GraduationCap, Mic2, BookOpenCheck } from "lucide-react";

export default function AboutMe() {
	return (
		<section
			id="about"
			className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Right: Image */}
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-20 scale-105"></div>
						<div className="relative rounded-2xl overflow-hidden border-4 border-gray-700 shadow-xl">
							<img
								src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=800"
								alt="MC Quốc Anh"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
						</div>
					</div>
					{/* Left: Text Content */}
					<div>
						<h2 className="text-2xl md:text-4xl font-bold mb-6">
							Giới thiệu <span className="text-blue-400">bản thân</span>
						</h2>
						<p className="text-lg text-gray-300 leading-relaxed mb-6">
							Tôi là <span className="font-semibold text-white">Quốc Anh</span>{" "}
							– MC chuyên nghiệp với hơn 8 năm kinh nghiệm dẫn dắt các sự kiện
							đa dạng, từ tiệc cưới, lễ khai trương, đến hội nghị doanh nghiệp
							cấp cao. Sự duyên dáng, kiểm soát sân khấu tốt và khả năng kết nối
							với khán giả là điểm mạnh giúp tôi ghi dấu ấn trong từng chương
							trình.
						</p>

						<p className="text-lg text-gray-300 leading-relaxed">
							Mỗi sự kiện, dù nhỏ hay lớn, tôi đều xem là một cơ hội để tạo nên
							những{" "}
							<span className="text-blue-400 font-medium">
								giây phút đáng nhớ
							</span>{" "}
							và giúp khách hàng tỏa sáng theo cách riêng của họ.
						</p>

						{/* Highlight Stats */}
						<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
							<div className="flex items-center space-x-4">
								<GraduationCap className="h-8 w-8 text-blue-400" />
								<div>
									<div className="text-lg font-semibold">Cử nhân</div>
									<div className="text-sm text-gray-400">
										Truyền thông Sự kiện
									</div>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<Mic2 className="h-8 w-8 text-purple-400" />
								<div>
									<div className="text-lg font-semibold">500+ chương trình</div>
									<div className="text-sm text-gray-400">MC dẫn dắt chính</div>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<BookOpenCheck className="h-8 w-8 text-yellow-400" />
								<div>
									<div className="text-lg font-semibold">8 năm</div>
									<div className="text-sm text-gray-400">
										làm nghề thực chiến
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
