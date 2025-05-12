/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Github, Mail, Phone } from "lucide-react";
import { Card } from "./components/ui/card";
import { CardContent } from "./components/ui/cardContent";
import { Button } from "./components/ui/button";

function App() {
	return (
		<main className="main">
			{/* Header */}
			<header className="header">
				<h1>Jerod Brackin</h1>
				<p>Senior Full-Stack Developer</p>
				<div className="header-icons">
					<a href="mailto:jbrackin1@gmail.com" aria-label="Email">
						<Mail className="w-5 h-5" />
					</a>
					<a href="tel:2254214403" aria-label="Phone">
						<Phone className="w-5 h-5" />
					</a>
					<a
						href="https://www.github.com/jbrackin1"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer">
						<Github className="w-5 h-5" />
					</a>
				</div>
				{/* <Button href="/jerod-brackin-resume.pdf">Download Résumé</Button> */}
			</header>

			{/* About Me */}
			<Card>
				<CardContent>
					<h2>About Me</h2>
					<p>
						Senior Full-Stack Developer with OTS clearance and deep experience
						in secure, scalable web and mobile software. Skilled in C#/.NET,
						React, Azure, AWS, and IoT. Proven success delivering solutions in
						government, maritime logistics, automotive, and nonprofit sectors.
					</p>
				</CardContent>
			</Card>

			{/* Projects */}
			<Card>
				<CardContent>
					<h2>Featured Projects</h2>
					<ul>
						<li>
							<h3>BeadPay – Crypto Civil Fines System</h3>
							<p>
								Built secure crypto-based fine payment system with C#, SQL
								Server, and Azure Functions. Integrated wallets and compliance
								flows.
							</p>
						</li>
						<li>
							<h3>Maritime IoT Platform</h3>
							<p>
								Led development of cross-platform tracking and NFC-based asset
								tracking using Next.js, Xamarin, and Azure dashboards.
							</p>
						</li>
						<li>
							<h3>DonateAble & AGM Benefits Vault</h3>
							<p>
								React Native and .NET mobile solutions for donations and
								healthcare access management.
							</p>
						</li>
						<li>
							<h3>DTK-Pymailer Email Engine</h3>
							<p>
								High-volume mailing tool built with React, Flask, and AWS. Saved
								$10K/month in licensing costs.
							</p>
						</li>
						<li>
							<h3>Cell Work Bio Education Platform</h3>
							<p>
								Developed STEM learning dashboards and API integrations using
								React and Python.
							</p>
						</li>
					</ul>
				</CardContent>
			</Card>

			{/* Skills */}
			<Card>
				<CardContent>
					<h2>Tech Stack</h2>
					<div className="TechStack">
						{["C#", ".NET Core", "ASP.NET", "React", "React Native", "Xamarin", "MAUI", "Python", "JavaScript", "TypeScript", "Azure", "AWS", "Docker", "Jenkins", "SQL", "CI/CD", "Git", "TDD", "Agile"].map((skill) => (
							<span key={skill}>{skill}</span>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Education */}
			<Card>
				<CardContent>
					<h2>Education</h2>
					<ul className="list-disc list-inside">
						<li>
							Thinkful – Certificate in Software Engineering (PERN Stack), 2023
						</li>
						<li>
							Louisiana State University – B.S. Software Engineering, 2009
						</li>
					</ul>
				</CardContent>
			</Card>

			{/* Footer */}
			<footer>
				<p>© 2025 Jerod Brackin. All rights reserved.</p>
			</footer>
		</main>
	);
}

export default App;
