"use client";

import { GraduationCap, Mic2, BookOpenCheck } from "lucide-react";

export default function AboutMe() {
	return (
		<section
			id="about"
			className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
		>
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Vệt sáng */}
				<div
					className="falling-star"
					style={{ left: "10%", animationDelay: "0s" }}
				/>
				<div
					className="falling-star"
					style={{ left: "30%", animationDelay: "1s" }}
				/>
				<div
					className="falling-star"
					style={{ left: "60%", animationDelay: "2.5s" }}
				/>
				<div
					className="falling-star"
					style={{ left: "85%", animationDelay: "3.2s" }}
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Right: Image */}
					<div className="relative">
						{/* Nền ánh sáng mờ */}
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-20 scale-105"></div>

						{/* Ảnh chính */}
						<img
							src="/images/self/1.png"
							alt="MC Quốc Anh"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Left: Text Content */}
					<div>
						<h2 className="text-2xl md:text-4xl font-bold mb-6">
							Giới thiệu <span className="text-blue-400">bản thân</span>
						</h2>
						<p className="text-lg text-gray-300 leading-relaxed mb-6">
							Tôi là <span className="font-semibold text-white">Quốc Anh</span>{" "}
							MC truyền hình từng dẫn cho{" "}
							<span className="font-semibold text-white">
								VTV , VTV Cab, VTC
							</span>{" "}
							và gần{" "}
							<span className="font-semibold text-white">
								10 năm kinh nghiệm
							</span>{" "}
							dẫn dắt các sự kiện đa dạng, từ Hội nghị khách hàng, tiệc cuối
							năm, chương trình đào tạo, gala dinner , giới thiệu sản phẩm, mở
							bán BDS với nhiều sự kiện trên{" "}
							<span className="font-semibold text-white">5000 người.</span>
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
									<div className="text-lg font-semibold">10 năm</div>
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
