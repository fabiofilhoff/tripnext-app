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
      {/* NOVA ANIMAÇÃO DE FUNDO - NÚCLEO DE ENERGIA CIRCULAR FUTURISTA */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Núcleo de energia circular brilhante - emergindo do centro inferior */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px]">
          {/* Core central com glow intenso */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Núcleo principal - roxo/violeta brilhante */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-full blur-[80px] opacity-80 animate-core-pulse"></div>
            
            {/* Halo externo - bloom effect */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-400/40 via-violet-400/40 to-fuchsia-400/40 rounded-full blur-[120px] animate-halo-expand"></div>
            
            {/* Glow volumétrico adicional */}
            <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-purple-300/20 via-violet-300/20 to-fuchsia-300/20 rounded-full blur-[150px] animate-volumetric-glow"></div>
          </div>

          {/* Ondas de energia radiais */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[400px] h-[400px] border-2 border-purple-500/30 rounded-full animate-energy-wave-1"></div>
            <div className="absolute w-[500px] h-[500px] border-2 border-violet-500/20 rounded-full animate-energy-wave-2"></div>
            <div className="absolute w-[600px] h-[600px] border border-fuchsia-500/15 rounded-full animate-energy-wave-3"></div>
          </div>

          {/* Partículas de energia orbitando */}
          <div className="absolute inset-0 animate-orbit-particles">
            <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-purple-400 rounded-full blur-sm shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-violet-400 rounded-full blur-sm shadow-[0_0_15px_rgba(139,92,246,0.8)]"></div>
            <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-fuchsia-400 rounded-full blur-sm shadow-[0_0_15px_rgba(217,70,239,0.8)]"></div>
          </div>

          {/* Raios de luz volumétrica */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[2px] h-[400px] bg-gradient-to-t from-purple-500/50 via-purple-400/30 to-transparent blur-sm animate-light-ray-1"></div>
            <div className="absolute w-[2px] h-[400px] bg-gradient-to-t from-violet-500/50 via-violet-400/30 to-transparent blur-sm animate-light-ray-2 rotate-45"></div>
            <div className="absolute w-[2px] h-[400px] bg-gradient-to-t from-fuchsia-500/50 via-fuchsia-400/30 to-transparent blur-sm animate-light-ray-3 -rotate-45"></div>
          </div>
        </div>

        {/* Dispersão atmosférica de luz */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent"></div>
        
        {/* Grid Pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 font-inter">

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

        {/* Description - ATUALIZADA E MAIS BAIXA */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl text-center mb-12 leading-relaxed font-inter mt-8">
          Hospede. Viaje. Sublucre. Ganhe. Tudo no mesmo lugar.
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
                className="relative w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 font-bold text-base tracking-widest uppercase font-inter hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-purple-500/60 overflow-hidden clip-corner"
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
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-inter uppercase tracking-wider">Nome completo</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-purple-500/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all font-inter"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-inter uppercase tracking-wider">E-mail</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-purple-500/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all font-inter"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-inter uppercase tracking-wider">Telefone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/5 border border-purple-500/20 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all font-inter"
                      required
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 bg-white/5 border border-purple-500/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 font-inter uppercase tracking-wider"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 font-inter uppercase tracking-wider"
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
              <p className="text-green-400 font-medium font-inter">
                ✨ Obrigado! Você será o primeiro a saber quando lançarmos!
              </p>
            </div>
          )}
        </div>

        {/* 3 CARDS FUTURISTAS SEPARADOS COM ÍCONES ANIMADOS E EFEITO DE FUNDO */}
        <div className="w-full max-w-6xl px-4 mt-20 mb-16">
          
          {/* Grid de 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* CARD 1 - HOSPEDE */}
            <div className="group relative">
              {/* Glow externo */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-purple-950/80 via-purple-900/60 to-purple-950/80 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-700 overflow-hidden h-full flex flex-col">
                
                {/* EFEITO DE FUNDO ROXO EM MOVIMENTO - MESMO DO TOPO */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {/* Núcleo de energia circular */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px]">
                    {/* Core central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-full blur-[40px] opacity-60 animate-core-pulse"></div>
                      <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-purple-400/30 via-violet-400/30 to-fuchsia-400/30 rounded-full blur-[60px] animate-halo-expand"></div>
                    </div>
                    
                    {/* Ondas radiais */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[200px] h-[200px] border border-purple-500/20 rounded-full animate-energy-wave-1"></div>
                      <div className="absolute w-[250px] h-[250px] border border-violet-500/15 rounded-full animate-energy-wave-2"></div>
                    </div>
                    
                    {/* Partículas */}
                    <div className="absolute inset-0 animate-orbit-particles">
                      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-purple-400 rounded-full blur-sm"></div>
                      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Textura de grade futurista */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col items-center text-center flex-1">
                  
                  {/* Ícone Animado com Efeito de Luz */}
                  <div className="mb-6">
                    <div className="relative">
                      {/* Glow pulsante sutil */}
                      <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-40 animate-icon-glow"></div>
                      
                      {/* Container do ícone */}
                      <div className="relative bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-5 rounded-2xl border border-purple-400/40 group-hover:scale-110 transition-transform duration-500">
                        <Zap className="w-10 h-10 text-purple-300 animate-icon-pulse" strokeWidth={2.5} />
                      </div>
                      
                      {/* Partículas decorativas */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight font-rajdhani">
                    Hospede
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-base text-gray-300 leading-relaxed font-inter">
                    Controle total das suas operações de aluguel em tempo real, sem burocracia.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 - VIAJE/SUBLUCRE */}
            <div className="group relative">
              {/* Glow externo */}
              <div className="absolute -inset-1 bg-gradient-to-br from-fuchsia-600 via-fuchsia-500 to-fuchsia-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-fuchsia-950/80 via-fuchsia-900/60 to-fuchsia-950/80 backdrop-blur-xl border-2 border-fuchsia-500/30 rounded-3xl p-8 hover:border-fuchsia-400/50 transition-all duration-700 overflow-hidden h-full flex flex-col">
                
                {/* EFEITO DE FUNDO ROXO EM MOVIMENTO - MESMO DO TOPO */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {/* Núcleo de energia circular */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px]">
                    {/* Core central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-fuchsia-500 via-pink-500 to-fuchsia-500 rounded-full blur-[40px] opacity-60 animate-core-pulse"></div>
                      <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-fuchsia-400/30 via-pink-400/30 to-fuchsia-400/30 rounded-full blur-[60px] animate-halo-expand"></div>
                    </div>
                    
                    {/* Ondas radiais */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[200px] h-[200px] border border-fuchsia-500/20 rounded-full animate-energy-wave-1"></div>
                      <div className="absolute w-[250px] h-[250px] border border-pink-500/15 rounded-full animate-energy-wave-2"></div>
                    </div>
                    
                    {/* Partículas */}
                    <div className="absolute inset-0 animate-orbit-particles">
                      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-fuchsia-400 rounded-full blur-sm"></div>
                      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Textura de grade futurista */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.06)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col items-center text-center flex-1">
                  
                  {/* Ícone Animado com Efeito de Luz */}
                  <div className="mb-6">
                    <div className="relative">
                      {/* Glow pulsante sutil */}
                      <div className="absolute inset-0 bg-fuchsia-500 rounded-2xl blur-xl opacity-40 animate-icon-glow"></div>
                      
                      {/* Container do ícone */}
                      <div className="relative bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-600/20 p-5 rounded-2xl border border-fuchsia-400/40 group-hover:scale-110 transition-transform duration-500">
                        <TrendingUp className="w-10 h-10 text-fuchsia-300 animate-icon-pulse" strokeWidth={2.5} />
                      </div>
                      
                      {/* Partículas decorativas */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-fuchsia-300 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight font-rajdhani">
                    Sublucre
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-base text-gray-300 leading-relaxed font-inter">
                    Maximize seus ganhos com menos taxas e total controle sobre sua margem de lucro.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 - GANHE */}
            <div className="group relative">
              {/* Glow externo */}
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 via-violet-500 to-violet-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-violet-950/80 via-violet-900/60 to-violet-950/80 backdrop-blur-xl border-2 border-violet-500/30 rounded-3xl p-8 hover:border-violet-400/50 transition-all duration-700 overflow-hidden h-full flex flex-col">
                
                {/* EFEITO DE FUNDO ROXO EM MOVIMENTO - MESMO DO TOPO */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {/* Núcleo de energia circular */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px]">
                    {/* Core central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 rounded-full blur-[40px] opacity-60 animate-core-pulse"></div>
                      <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-violet-400/30 via-purple-400/30 to-violet-400/30 rounded-full blur-[60px] animate-halo-expand"></div>
                    </div>
                    
                    {/* Ondas radiais */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[200px] h-[200px] border border-violet-500/20 rounded-full animate-energy-wave-1"></div>
                      <div className="absolute w-[250px] h-[250px] border border-purple-500/15 rounded-full animate-energy-wave-2"></div>
                    </div>
                    
                    {/* Partículas */}
                    <div className="absolute inset-0 animate-orbit-particles">
                      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-violet-400 rounded-full blur-sm"></div>
                      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Textura de grade futurista */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col items-center text-center flex-1">
                  
                  {/* Ícone Animado com Efeito de Luz */}
                  <div className="mb-6">
                    <div className="relative">
                      {/* Glow pulsante sutil */}
                      <div className="absolute inset-0 bg-violet-500 rounded-2xl blur-xl opacity-40 animate-icon-glow"></div>
                      
                      {/* Container do ícone */}
                      <div className="relative bg-gradient-to-br from-violet-500/30 to-violet-600/20 p-5 rounded-2xl border border-violet-400/40 group-hover:scale-110 transition-transform duration-500">
                        <Globe className="w-10 h-10 text-violet-300 animate-icon-pulse" strokeWidth={2.5} />
                      </div>
                      
                      {/* Partículas decorativas */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-violet-300 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight font-rajdhani">
                    Ganhe
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-base text-gray-300 leading-relaxed font-inter">
                    Gere renda de qualquer lugar do mundo, com total liberdade geográfica.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTÃO CTA PRINCIPAL - CENTRALIZADO E NO TOPO (APÓS CARD) */}
        <div className="flex justify-center max-w-2xl w-full mb-16 px-4">
          
          {/* BOTÃO PRINCIPAL - CTA AGRESSIVO */}
          <div className="relative group w-full max-w-lg">
            {/* Glow externo forte */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-gradient bg-[length:200%_auto]"></div>
            
            <button 
              onClick={() => setShowForm(true)}
              className="relative w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white px-8 py-5 rounded-2xl font-black text-lg tracking-wide uppercase hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-purple-500/60 overflow-hidden font-rajdhani"
            >
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
            <p className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-3 font-inter">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 font-rajdhani tracking-[0.2em] uppercase animate-gradient bg-[length:200%_auto] [text-shadow:0_0_30px_rgba(168,85,247,0.4)]">
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
                    <span className="text-lg font-semibold text-white pr-4 leading-relaxed font-inter">
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
                        <p className="text-gray-400 leading-relaxed font-inter">
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
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-6 text-center">
        <p className="text-sm text-gray-600 font-inter">
          © 2025 TripNext.App - Transformando viagens em oportunidades, aluguel em fonte de renda!
        </p>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

        .font-rajdhani {
          font-family: 'Rajdhani', sans-serif;
        }

        /* Animação do núcleo de energia */
        @keyframes core-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .animate-core-pulse {
          animation: core-pulse 6s ease-in-out infinite;
        }

        /* Animação do halo externo */
        @keyframes halo-expand {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.6;
          }
        }

        .animate-halo-expand {
          animation: halo-expand 8s ease-in-out infinite;
        }

        /* Animação de glow volumétrico */
        @keyframes volumetric-glow {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.3;
          }
        }

        .animate-volumetric-glow {
          animation: volumetric-glow 12s ease-in-out infinite;
        }

        /* Ondas de energia radiais */
        @keyframes energy-wave-1 {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes energy-wave-2 {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @keyframes energy-wave-3 {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.15;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        .animate-energy-wave-1 {
          animation: energy-wave-1 6s ease-out infinite;
        }

        .animate-energy-wave-2 {
          animation: energy-wave-2 7s ease-out infinite 1s;
        }

        .animate-energy-wave-3 {
          animation: energy-wave-3 8s ease-out infinite 2s;
        }

        /* Partículas orbitando */
        @keyframes orbit-particles {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-orbit-particles {
          animation: orbit-particles 20s linear infinite;
        }

        /* Raios de luz volumétrica */
        @keyframes light-ray-1 {
          0%, 100% {
            opacity: 0.3;
            transform: scaleY(1);
          }
          50% {
            opacity: 0.6;
            transform: scaleY(1.2);
          }
        }

        @keyframes light-ray-2 {
          0%, 100% {
            opacity: 0.2;
            transform: rotate(45deg) scaleY(1);
          }
          50% {
            opacity: 0.5;
            transform: rotate(45deg) scaleY(1.3);
          }
        }

        @keyframes light-ray-3 {
          0%, 100% {
            opacity: 0.2;
            transform: rotate(-45deg) scaleY(1);
          }
          50% {
            opacity: 0.5;
            transform: rotate(-45deg) scaleY(1.3);
          }
        }

        .animate-light-ray-1 {
          animation: light-ray-1 7s ease-in-out infinite;
        }

        .animate-light-ray-2 {
          animation: light-ray-2 8s ease-in-out infinite 1s;
        }

        .animate-light-ray-3 {
          animation: light-ray-3 9s ease-in-out infinite 2s;
        }

        /* ANIMAÇÕES DOS ÍCONES - EFEITO DE LUZ SUTIL */
        @keyframes icon-glow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-icon-glow {
          animation: icon-glow 3s ease-in-out infinite;
        }

        @keyframes icon-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-icon-pulse {
          animation: icon-pulse 2s ease-in-out infinite;
        }

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
