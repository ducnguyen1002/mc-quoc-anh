"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#home", label: "Trang chủ" },
		{ href: "#services", label: "Dịch vụ" },
		{ href: "#gallery", label: "Thư viện ảnh" },
		{ href: "#testimonials", label: "Cảm nhận" },
		{ href: "#contact", label: "Liên hệ" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		element?.scrollIntoView({ behavior: "smooth" });
		setIsOpen(false);
	};

	return (
		<nav
			className={clsx(
				"fixed top-0 w-full z-50 transition-all duration-300",
				scrolled
					? "bg-black/90 backdrop-blur-md border-b border-gray-800"
					: "bg-transparent"
			)}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-2">
						<Mic className="h-8 w-8 text-blue-400" />
						<span className="text-lg font-bold text-white">QuocAnh</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map((item) => (
								<button
									key={item.href}
									onClick={() => scrollToSection(item.href)}
									className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					{/* Book Now Button */}
					<div className="hidden md:block">
						<Button
							onClick={() => scrollToSection("#contact")}
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
						>
							Liên hệ ngay
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-300 hover:text-white"
							aria-label="Toggle Menu"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation with animation */}
			<div
				className={clsx(
					"md:hidden h-[1000px] overflow-hidden transition-all duration-500 ease-in-out bg-black/95 backdrop-blur-md border-b border-gray-800",
					isOpen
						? "max-h-screen opacity-100"
						: "max-h-0 opacity-0 pointer-events-none"
				)}
			>
				<div className="px-4 pt-4 pb-6 space-y-1 transition-opacity duration-300">
					{navItems.map((item) => (
						<button
							key={item.href}
							onClick={() => scrollToSection(item.href)}
							className="text-gray-300 hover:text-blue-400 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
						>
							{item.label}
						</button>
					))}

					<div className="pt-10">
						<Button
							onClick={() => scrollToSection("#contact")}
							className="w-2/3 mx-auto block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition-all"
						>
							Liên hệ ngay
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
