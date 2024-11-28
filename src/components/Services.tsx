import React from 'react';
import { Code, Smartphone, Globe, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: 'Desenvolvimento Web',
    description: 'Criamos websites modernos e responsivos que impressionam seus clientes.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com experiência excepcional.'
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: 'Marketing Digital',
    description: 'Estratégias completas para aumentar sua presença online e gerar resultados.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Segurança Digital',
    description: 'Proteção avançada para seus dados e sistemas contra ameaças cibernéticas.'
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para todas as suas necessidades digitais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}