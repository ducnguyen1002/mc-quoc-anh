"use client";

import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="py-20 bg-black"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
						Cùng nhau tạo nên điều tuyệt vời!
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Sẵn sàng cho một sự kiện đáng nhớ? Hãy liên hệ để trao đổi ý tưởng
						và nhận báo giá riêng cho bạn.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Thông tin liên hệ */}
					<div className="space-y-8">
						<div>
							<h3 className="text-2xl font-bold text-white mb-6">
								Thông tin liên hệ
							</h3>
							<div className="space-y-6">
								<div
									className="flex items-center"
									data-aos="fade-up"
								>
									<div className="bg-blue-500/10 border border-blue-500/20 rounded-full p-3 mr-4">
										<Phone className="h-6 w-6 text-blue-400" />
									</div>
									<div>
										<p className="text-gray-400 text-sm">Điện thoại</p>
										<p className="text-white font-semibold">
											+1 (555) 123-4567
										</p>
									</div>
								</div>

								<div
									className="flex items-center"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									<div className="bg-purple-500/10 border border-purple-500/20 rounded-full p-3 mr-4">
										<Mail className="h-6 w-6 text-purple-400" />
									</div>
									<div>
										<p className="text-gray-400 text-sm">Email</p>
										<p className="text-white font-semibold">
											mcquocanh@gmail.com
										</p>
									</div>
								</div>

								<div
									className="flex items-center"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									<div className="bg-blue-500/10 border border-blue-500/20 rounded-full p-3 mr-4">
										<MapPin className="h-6 w-6 text-blue-400" />
									</div>
									<div>
										<p className="text-gray-400 text-sm">Khu vực hoạt động</p>
										<p className="text-white font-semibold">TP. Hà Nội</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Form liên hệ */}
					<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
						<h4 className="text-lg font-bold text-white mb-4">
							Thông tin nhanh
						</h4>
						<ul className="space-y-3 text-gray-300">
							<li className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-400 mr-3" />
								Nhận tổ chức sự kiện trên toàn quốc
							</li>
							<li className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-400 mr-3" />
								Lịch trình linh hoạt
							</li>
							<li className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-400 mr-3" />
								Có gói dịch vụ tùy chỉnh
							</li>
							<li className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-400 mr-3" />
								Hỗ trợ sự kiện 24/7
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
