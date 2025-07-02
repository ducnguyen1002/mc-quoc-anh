"use client";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Link from "next/link";
import AboutMe from "@/components/AboutMe";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			easing: "ease-in-out",
		});
	}, []);
	return (
		<main className="min-h-screen bg-black">
			<Navigation />
			<Hero />
			<AboutMe />
			<Services />
			<Gallery />
			<Testimonials />
			<Contact />

			{/* Footer */}
			<footer className="bg-gray-900 border-t border-gray-800 py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p className="text-gray-400">© 2025 Quốc Anh.</p>
						<p className="text-gray-500 text-sm mt-2">
							Thiết kế & phát triển bới{" "}
							<Link
								target="_blank"
								href={"https://facebook.com/ducduc.1002"}
							>
								Đức Đức
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
