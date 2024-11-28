import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforme suas ideias em realidade digital
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Desenvolvemos soluções tecnológicas inovadoras para impulsionar seu negócio ao próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center justify-center">
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
            src="https://blog.hubdodesenvolvedor.com.br/wp-content/uploads/2024/03/capa-linguagens-em-alta.jpg" 
            width={600} 
            alt="Team working"
            className="rounded-lg shadow-xl"
            style={{ marginLeft: 'auto', marginRight: '0', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}