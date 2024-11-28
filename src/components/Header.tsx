import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChevronDown className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">TechSolutions</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600">Início</a>
            <a href="#servicos" className="text-gray-600 hover:text-blue-600">Serviços</a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600">Contato</a>
          </nav>

          <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Começar Agora
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600">Início</a>
              <a href="#servicos" className="text-gray-600 hover:text-blue-600">Serviços</a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-600">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600">Contato</a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition w-full">
                Começar Agora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}