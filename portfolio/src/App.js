import logo from './logo.svg';
import './App.css';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Mail, Phone } from "lucide-react";

function App() {
  return (

 <main className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Jerod Brackin</h1>
        <p className="text-lg text-gray-600">Senior Full-Stack Developer</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:jbrackin1@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="tel:2254214403"><Phone className="w-5 h-5" /></a>
          <a href="https://www.github.com/jbrackin1"><Github className="w-5 h-5" /></a>
        </div>
      </section>

      {/* About Me */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Senior Full-Stack Developer with OTS clearance and deep experience in secure, scalable web and mobile software. Skilled in C#/.NET, React, Azure, AWS, and IoT. Proven success delivering solutions in government, maritime logistics, automotive, and nonprofit sectors.
          </p>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-medium">BeadPay – Crypto Civil Fines System</h3>
              <p>Built secure crypto-based fine payment system with C#, SQL Server, and Azure Functions. Integrated wallets and compliance flows.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">Maritime IoT Platform</h3>
              <p>Led development of cross-platform tracking and NFC-based asset tracking using Next.js, Xamarin, and Azure dashboards.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">DonateAble & AGM Benefits Vault</h3>
              <p>React Native and .NET mobile solutions for donations and healthcare access management.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">DTK-Pymailer Email Engine</h3>
              <p>High-volume mailing tool built with React, Flask, and AWS. Saved $10K/month in licensing costs.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">Cell Work Bio Education Platform</h3>
              <p>Developed STEM learning dashboards and API integrations using React and Python.</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <p>C#, .NET Core, ASP.NET, React, React Native, Xamarin, MAUI, Python, JavaScript, TypeScript, Azure, AWS, Docker, Jenkins, SQL, CI/CD, Git, TDD, Agile</p>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc list-inside">
            <li>Thinkful – Certificate in Software Engineering (PERN Stack), 2023</li>
            <li>Louisiana State University – B.S. Software Engineering, 2009</li>
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <section className="text-center text-sm text-gray-500">
        <p>© 2025 Jerod Brackin. All rights reserved.</p>
      </section>
    </main>
  );
}

export default App;
