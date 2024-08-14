import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: "ISEEA",
	description:
		"ISEEA is a non-profit, youth-centered hub promoting awareness on the importance of self-esteem, self-awareness, and the dangers of low-self-esteem in Nigeria through media, mentorship, partnership, advocacy programs, and impact projects in local communities.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body
				data-scroll-duration="1000"
				data-scroll-deceleration="0.96"
				data-scroll-sensitivity="0.04"
				data-scroll-isScrolling="false"
				data-scroll-velocity="0"
				className=""
			>
				<Navbar />
				{children}
				<Footer />
				<script type="module" src="/src/index.tsx"></script>
				<script src="https://cdn.jsdelivr.net/gh/monsieurdd/mrD-SmoothScroller@latest/mrd-smoothscroller.js"></script>
			</body>
		</html>
	);
}
