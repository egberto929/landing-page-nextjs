import { Menu, X } from 'lucide-react';
import React from 'react';

export function Sobre() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <section id="sobre" className="relative bg-gray-50 py-16 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Sobre Nós
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Somos uma equipe apaixonada por inovar e resolver os desafios dos nossos clientes com soluções tecnológicas de ponta. Nossa missão é ajudar a transformar ideias em realidade. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi accusamus odio officia beatae harum eius quaerat eos, illo minima minus aperiam excepturi vel ex ipsa eaque quia reprehenderit perspiciatis veritatis. 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nobis deserunt illo odio ea, autem obcaecati consectetur quod qui voluptatibus, aliquid harum deleniti neque voluptates ipsa sed. Eveniet, dignissimos inventore.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas esse, dignissimos illo perferendis, necessitatibus porro reiciendis nihil dolores qui commodi quia, magni culpa nostrum quidem. Autem temporibus perferendis ullam accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem facilis repudiandae eos quos, officiis quasi eveniet veritatis consectetur. Repudiandae illum accusantium aliquam nisi molestiae amet. Dolore saepe molestias rem sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur libero, nihil porro voluptas nobis molestias, eaque veritatis excepturi eligendi at magni omnis id ullam assumenda ipsam. Commodi, neque cupiditate. 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At magni pariatur quis. Nisi distinctio quis, debitis laboriosam doloribus sapiente ullam ut sunt dolores doloremque, repellendus soluta, delectus iste odio mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo quos tempora omnis dolorem corporis! Facere ipsam asperiores, repellat deleniti quibusdam magnam aspernatur necessitatibus placeat modi, possimus nobis molestiae corrupti? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et provident neque eaque fuga quia doloremque. Sint asperiores ullam autem consequatur voluptas officiis nobis, suscipit blanditiis maxime, esse, reiciendis ipsa aut? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quo maiores neque ratione tenetur eaque, ad dolorum quisquam ea aliquid adipisci sapiente eligendi iusto commodi non officiis. Aliquam, porro. Modi!
        </p>

        <div className="mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
            Saiba Mais
          </button>
        </div>
      </div>

      {/* Mobile Menu for extra interactivity (optional) */}
      <button 
        className="md:hidden absolute top-4 right-4 text-gray-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu for the Sobre Section (optional) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white p-4 shadow-lg rounded-md">
          <p className="text-gray-600">Sobre nós - Descubra mais sobre nossa missão e valores.</p>
        </div>
      )}
    </section>
  );
}
