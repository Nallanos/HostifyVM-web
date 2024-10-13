import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h5 className="text-lg font-semibold">Contact us</h5>
          <p>Email: benameurallan06@gmail.com</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={24} className="hover:text-gray-400" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} className="hover:text-gray-400" />
          </a>
          <a
            href="https://github.com/Nallanos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
