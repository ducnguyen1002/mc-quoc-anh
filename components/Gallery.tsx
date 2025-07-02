"use client";

import { useState } from "react";
import { Play, X, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
	const [selectedMedia, setSelectedMedia] = useState<any>(null);
	const [activeCategory, setActiveCategory] = useState("Tất cả");

	const galleryItems = [
		{
			id: 1,
			type: "image",
			src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
			thumb:
				"https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Corporate Gala Dinner",
			category: "Gala Dinner",
		},
		{
			id: 2,
			type: "video",
			src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
			thumb:
				"https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Grand Opening Ceremony",
			category: "Khai trương",
		},
		{
			id: 3,
			type: "image",
			src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
			thumb:
				"https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Elegant Wedding Reception",
			category: "Đám cưới",
		},
		{
			id: 4,
			type: "image",
			src: "https://images.pexels.com/photos/1309899/pexels-photo-1309899.jpeg?auto=compress&cs=tinysrgb&w=800",
			thumb:
				"https://images.pexels.com/photos/1309899/pexels-photo-1309899.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Award Ceremony",
			category: "Gala Dinner",
		},
		{
			id: 5,
			type: "video",
			src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
			thumb:
				"https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Product Launch Event",
			category: "Khai trương",
		},
		{
			id: 6,
			type: "image",
			src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
			thumb:
				"https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Romantic Garden Wedding",
			category: "Đám cưới",
		},
		{
			id: 7,
			type: "image",
			src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
			thumb:
				"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Charity Fundraiser",
			category: "Gala Dinner",
		},
		{
			id: 8,
			type: "image",
			src: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=800",
			thumb:
				"https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=400",
			title: "Store Opening Celebration",
			category: "Khai trương",
		},
	];

	const categories = [
		"Tất cả",
		...Array.from(new Set(galleryItems.map((item) => item.category))),
	];
	const filteredItems =
		activeCategory === "Tất cả"
			? galleryItems
			: galleryItems.filter((item) => item.category === activeCategory);

	const openLightbox = (item: any) => setSelectedMedia(item);
	const closeLightbox = () => setSelectedMedia(null);

	return (
		<section
			id="gallery"
			className="py-20 bg-gray-900"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
						Thư viện sự kiện
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Cùng nhìn lại những khoảnh khắc đáng nhớ tại các sự kiện tôi đã vinh
						dự đồng hành dẫn dắt.
					</p>
				</div>

				{/* Bộ lọc */}
				<div className="flex flex-wrap justify-center gap-3 mb-10">
					{categories.map((category) => (
						<Button
							key={category}
							variant={activeCategory === category ? "default" : "outline"}
							onClick={() => setActiveCategory(category)}
							className="capitalize"
						>
							{category}
						</Button>
					))}
				</div>

				{/* Lưới ảnh gallery */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredItems.map((item, index) => (
						<div
							data-aos="zoom-in"
							data-aos-delay={index * 50}
							key={item.id}
							className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-800"
							onClick={() => openLightbox(item)}
						>
							<img
								src={item.thumb}
								alt={item.title}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<div className="text-center">
									{item.type === "video" ? (
										<Play className="h-12 w-12 text-white mb-2 mx-auto" />
									) : (
										<ImageIcon className="h-12 w-12 text-white mb-2 mx-auto" />
									)}
									<h3 className="text-white font-semibold text-sm mb-1">
										{item.title}
									</h3>
									<p className="text-blue-400 text-xs">{item.category}</p>
								</div>
							</div>
							<div className="absolute top-2 right-2">
								{item.type === "video" && (
									<div className="bg-black/70 rounded-full p-1">
										<Video className="h-4 w-4 text-white" />
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Khung xem chi tiết (Lightbox) */}
				{selectedMedia && (
					<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
						<div className="relative max-w-4xl max-h-full">
							<Button
								onClick={closeLightbox}
								variant="ghost"
								size="icon"
								className="absolute -top-12 right-0 text-white hover:bg-white/10"
							>
								<X className="h-6 w-6" />
							</Button>

							{selectedMedia.type === "video" ? (
								<video
									controls
									src={selectedMedia.src}
									className="max-w-full max-h-[80vh] rounded-lg"
								/>
							) : (
								<img
									src={selectedMedia.src}
									alt={selectedMedia.title}
									className="max-w-full max-h-[80vh] object-contain rounded-lg"
								/>
							)}

							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
								<h3 className="text-white text-lg font-semibold mb-1">
									{selectedMedia.title}
								</h3>
								<p className="text-blue-400">{selectedMedia.category}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
