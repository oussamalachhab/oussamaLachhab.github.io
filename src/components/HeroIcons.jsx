import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from '../contexts/ThemeContext';

export default function HeroIcons() {
  const { isDark } = useTheme();

  return (
    <div className="flex gap-4 text-2xl">
      <a 
        href="https://github.com/oussamalachhab" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'text-white hover:text-gray-400' 
            : 'text-gray-700 hover:text-gray-900'
        }`}
      >
        <FaGithub />
      </a>

      <a 
        href="https://linkedin.com/in/oussama-lachhab-966903266" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'text-white hover:text-[var(--race-red)]' 
            : 'text-gray-700 hover:text-[var(--race-red)]'
        }`}
      >
        <FaLinkedin />
      </a>

      <a 
        href="mailto:lachhab.oussama264@gmail.com" 
        className={`transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'text-white hover:text-[var(--sector-purple)]' 
            : 'text-gray-700 hover:text-[var(--sector-purple)]'
        }`}
      >
        <FaEnvelope />
      </a>
    </div>
  );
}