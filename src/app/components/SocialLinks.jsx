import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="absolute right-8 top-32 flex flex-col gap-4">
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-black group transition-colors"
      >
        <Github size={24} className="text-gray-600 group-hover:text-white transition-colors" />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-black group transition-colors"
      >
        <Twitter size={24} className="text-gray-600 group-hover:text-white transition-colors" />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-black group transition-colors"
      >
        <Linkedin size={24} className="text-gray-600 group-hover:text-white transition-colors" />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-black group transition-colors"
      >
        <Instagram size={24} className="text-gray-600 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default SocialLinks;