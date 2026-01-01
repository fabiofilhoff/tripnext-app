"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, TrendingUp, Globe, ChevronDown } from "lucide-react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [subscribed, setSubscribed] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubscribed(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "" });
        setSubscribed(false);
        setShowForm(false);
      }, 3000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "O que exatamente é o TripNext?",
      answer: "O TripNext é um sistema de aluguel inteligente que ajuda você a operar, organizar e escalar renda com aluguel, mesmo sem ser dono de imóveis."
    },
    {
      question: "Preciso ter imóveis para usar o TripNext?",
      answer: "Não. O TripNext foi criado justamente para quem não possui imóveis, mas quer controlar operações de aluguel e gerar renda de forma estratégica."
    },
    {
      question: "O TripNext é um Airbnb ou plataforma de anúncios?",
      answer: "Não. O TripNext não é um marketplace. Ele é um sistema de controle e gestão para quem quer dominar a operação do aluguel."
    },
    {
      question: "Como o TripNext me ajuda a ganhar dinheiro?",
      answer: "Ajudando você a organizar operações, controlar entradas e saídas, reduzir erros e escalar com clareza. Renda vem de controle, não de promessas."
    },
    {
      question: "Posso usar o TripNext trabalhando de qualquer lugar do mundo?",
      answer: "Sim. O sistema foi pensado para liberdade geográfica e pode ser usado de qualquer lugar com acesso à internet."
    },
    {
      question: "O TripNext é indicado para iniciantes?",
      answer: "Sim. O sistema é simples, intuitivo e pensado para quem está começando, sem depender de tentativa e erro."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim. O TripNext segue boas práticas de segurança e proteção de dados para garantir privacidade e uso responsável das informações."
    },
    {
      question: "Quando o TripNext será lançado?",
      answer: "O TripNext está em fase de lançamento. Quem entra na lista de espera recebe acesso antecipado e condições especiais."
    },
    {
      question: "Como garantir o acesso antecipado?",
      answer: "Basta se inscrever na lista de espera. As vagas iniciais são limitadas e o acesso será liberado por ordem de entrada."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[150px] animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 font-geist-mono">

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            EM BREVE
          </span>
        </h1>

        {/* Brand Logo with Futuristic Background Element */}
        <div className="mb-6 relative">
          {/* Futuristic Animated Ring Behind Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[120%] h-[120%] border-2 border-purple-500/30 rounded-full animate-spin-slow"></div>
            <div className="absolute w-[140%] h-[140%] border border-fuchsia-500/20 rounded-full animate-spin-reverse"></div>
            <div className="absolute w-[110%] h-[110%] border-2 border-purple-400/40 rounded-full animate-pulse-ring"></div>
          </div>

          {/* NEW: Subtle Geometric Path Element - Matching Logo Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Hexagonal Path Trace */}
            <svg className="absolute w-[130%] h-[130%] animate-path-trace" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M100 20 L160 55 L160 125 L100 160 L40 125 L40 55 Z" 
                stroke="url(#pathGradient)" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeDasharray="400"
                strokeDashoffset="400"
                className="animate-draw-path"
              />
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#d946ef" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Rotating Orbit Lines */}
            <div className="absolute w-[125%] h-[125%] animate-orbit-slow">
              <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-purple-500/60 to-transparent -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-t from-fuchsia-500/60 to-transparent -translate-x-1/2"></div>
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur-2xl opacity-40"></div>
          
          {/* Logo */}
          <div className="relative">
            <Image
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ac3aae29-4a14-49c2-82da-5acbaad4df42.webp"
              alt="TripNext Logo"
              width={400}
              height={400}
              className="w-64 sm:w-80 lg:w-96 h-auto hover:scale-102 transition-transform duration-300 relative z-10"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl text-center mb-12 leading-relaxed">
          O futuro da hospedagem começa aqui.
        </p>

        {/* Subscription Section */}
        <div className="w-full max-w-md mb-8">
          {!showForm ? (
            // Initial Button - FORMATO FUTURISTA RETANGULAR COM DETALHE ANGULAR
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 animate-gradient bg-[length:200%_auto]"></div>
              
              {/* Button Container */}
              <button
                onClick={() => setShowForm(true)}
                className="relative w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 font-bold text-base tracking-widest uppercase font-geist-mono hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-purple-500/60 overflow-hidden clip-corner"
              >
                {/* Animated Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                {/* Detalhe Angular no Canto Inferior Direito */}
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-black transform rotate-45 translate-x-2 translate-y-2"></span>
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  INSCREVA-SE PARA A ESTREIA
                </span>
              </button>
            </div>
          ) : (
            // Form with Fields
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-purple-500/30 p-6 rounded-2xl space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-geist-mono uppercase tracking-wider">Nome completo</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-purple-500/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all font-geist-mono"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-geist-mono uppercase tracking-wider">E-mail</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-purple-500/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all font-geist-mono"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-geist-mono uppercase tracking-wider">Telefone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/5 border border-purple-500/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all font-geist-mono"
                      required
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 bg-white/5 border border-purple-500/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 font-geist-mono uppercase tracking-wider"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 font-geist-mono uppercase tracking-wider"
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Success Message */}
          {subscribed && (
            <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center animate-fade-in">
              <p className="text-green-400 font-medium font-geist-mono">
                ✨ Obrigado! Você será o primeiro a saber quando lançarmos!
              </p>
            </div>
          )}
        </div>

        {/* 3 CARDS PREMIUM VERTICAIS - TRIPNEXT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full mt-20 mb-16 px-4">
          
          {/* CARD 1 - CONTROLE */}
          <div className="group relative">
            {/* Glow externo premium */}
            <div className="absolute -inset-1 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-800 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* Card container vertical grande */}
            <div className="relative bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-2xl border border-purple-500/20 rounded-3xl p-10 hover:border-purple-400/40 transition-all duration-700 hover:scale-[1.03] overflow-hidden min-h-[420px] flex flex-col">
              
              {/* Textura sutil no background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),transparent)] opacity-50"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              {/* Ícone minimalista no topo com glow suave */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-2xl opacity-40"></div>
                  <div className="relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-5 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                    <Zap className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              {/* Headline clara e forte */}
              <h3 className="relative text-3xl font-black text-white mb-4 tracking-tight leading-tight text-center">
                Controle em tempo real
              </h3>
              
              {/* Texto de apoio curto */}
              <p className="relative text-base text-gray-400 leading-relaxed text-center font-light flex-grow">
                Operações de aluguel em segundos, com controle total e sem burocracia.
              </p>

              {/* Sombra suave para profundidade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* CARD 2 - LUCRO */}
          <div className="group relative">
            {/* Glow externo premium */}
            <div className="absolute -inset-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-800 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* Card container vertical grande */}
            <div className="relative bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-10 hover:border-blue-400/40 transition-all duration-700 hover:scale-[1.03] overflow-hidden min-h-[420px] flex flex-col">
              
              {/* Textura sutil no background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              {/* Ícone minimalista no topo com glow suave */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-40"></div>
                  <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-5 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                    <TrendingUp className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              {/* Headline clara e forte */}
              <h3 className="relative text-3xl font-black text-white mb-4 tracking-tight leading-tight text-center">
                Lucro acima da média
              </h3>
              
              {/* Texto de apoio curto */}
              <p className="relative text-base text-gray-400 leading-relaxed text-center font-light flex-grow">
                Menos taxas, mais margem e total controle sobre seus ganhos.
              </p>

              {/* Sombra suave para profundidade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* CARD 3 - LIBERDADE */}
          <div className="group relative">
            {/* Glow externo premium */}
            <div className="absolute -inset-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-800 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* Card container vertical grande */}
            <div className="relative bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-2xl border border-indigo-500/20 rounded-3xl p-10 hover:border-indigo-400/40 transition-all duration-700 hover:scale-[1.03] overflow-hidden min-h-[420px] flex flex-col">
              
              {/* Textura sutil no background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent)] opacity-50"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              {/* Ícone minimalista no topo com glow suave */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-2xl opacity-40"></div>
                  <div className="relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 p-5 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
                    <Globe className="w-10 h-10 text-indigo-400" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              {/* Headline clara e forte */}
              <h3 className="relative text-3xl font-black text-white mb-4 tracking-tight leading-tight text-center">
                Renda sem fronteiras
              </h3>
              
              {/* Texto de apoio curto */}
              <p className="relative text-base text-gray-400 leading-relaxed text-center font-light flex-grow">
                Ganhe com aluguel de qualquer lugar do mundo, sem endereço fixo.
              </p>

              {/* Sombra suave para profundidade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* BOTÃO CTA PRINCIPAL - CENTRALIZADO E NO TOPO (APÓS CARDS) */}
        <div className="flex justify-center max-w-2xl w-full mb-16 px-4">
          
          {/* BOTÃO PRINCIPAL - CTA AGRESSIVO */}
          <div className="relative group w-full max-w-lg">
            {/* Glow externo forte */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-gradient bg-[length:200%_auto]"></div>
            
            <button className="relative w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white px-8 py-5 rounded-2xl font-black text-lg tracking-wide uppercase hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-purple-500/60 overflow-hidden">
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <span className="relative z-10">
                QUERO ACESSO ANTECIPADO
              </span>
            </button>
          </div>

        </div>

        {/* SEÇÃO FAQ - DÚVIDAS COMUNS */}
        <div className="w-full max-w-4xl px-4 mb-20">
          {/* Header da seção */}
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-3 font-geist-mono">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 font-geist-mono tracking-[0.2em] uppercase animate-gradient bg-[length:200%_auto] [text-shadow:0_0_30px_rgba(168,85,247,0.4)]">
              Dúvidas comuns
            </h2>
          </div>

          {/* Lista de perguntas em accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow sutil no hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Container do item */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300">
                  
                  {/* Pergunta (botão clicável) */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-all duration-300"
                  >
                    <span className="text-lg font-semibold text-white pr-4 leading-relaxed">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Resposta (expansível) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-purple-500/10 pt-4">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Junte-se a milhares de viajantes aguardando</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 border-2 border-black flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-400 ml-2">+2.847 inscritos</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-6 text-center">
        <p className="text-sm text-gray-600">
          © 2024 TripNext.app - Transformando viagens em oportunidades
        </p>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }

        @keyframes draw-path {
          0% {
            stroke-dashoffset: 400;
            opacity: 0.3;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
          100% {
            stroke-dashoffset: -400;
            opacity: 0.3;
          }
        }

        .animate-draw-path {
          animation: draw-path 8s ease-in-out infinite;
        }

        @keyframes orbit-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-orbit-slow {
          animation: orbit-slow 25s linear infinite;
        }

        @keyframes path-trace {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-path-trace {
          animation: path-trace 4s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        /* Clip corner effect for futuristic button */
        .clip-corner {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%);
        }
      `}</style>
    </div>
  );
}
