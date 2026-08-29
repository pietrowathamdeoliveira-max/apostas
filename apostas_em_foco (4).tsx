import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Moon, Sun, Share2, ArrowRight, 
  ChevronRight, AlertTriangle, CheckCircle2, BarChart3, 
  BookOpen, Users, Globe, Smartphone, TrendingUp, AlertCircle,
  FileText, Link as LinkIcon, Download, CheckSquare,
  Activity, Database, ShieldAlert, Scale, Lock, Clock, Info, Target
} from 'lucide-react';

// ============================================================================
// 1. DADOS DO PROJETO (ÁREA DE EDIÇÃO DOS ALUNOS)
// ============================================================================
// Alunos: Editem apenas os textos dentro das aspas nesta seção.
// NUNCA crie dados fictícios para os resultados.

const DADOS_DO_PROJETO = {
  capa: {
    escola: "Aroldo de Azevedo",
    titulo: "APOSTAS EM FOCO",
    subtitulo: "Informação • Dados • Sociedade • Conscientização",
    integrantes: "Pietro, Nair, Beatriz, Jorge, Heitor, Murilo",
    turma: "9º B",
    professor: "Carina",
    orientador: "Rafael"
  },
  introducao: {
    tema: "Uma pesquisa sobre a popularização das apostas esportivas e cassinos online, sua presença digital massiva e os impactos socioeconômicos na sociedade brasileira contemporânea.",
    texto_livre: "O tema deste trabalho são as apostas, abordando o que são, como funcionam, seus principais tipos e os impactos que podem causar na vida das pessoas. O grupo escolheu esse assunto porque as apostas estão cada vez mais presentes na sociedade, principalmente com o crescimento das plataformas de apostas pela internet e sua divulgação nas redes sociais. Esse tema é importante hoje em dia porque o fácil acesso às apostas pode trazer consequências financeiras e sociais, sendo necessário conhecer melhor o seu funcionamento, seus riscos e a importância de tomar decisões responsáveis. Ao longo do trabalho serão apresentados o conceito de apostas, como elas funcionam, os principais tipos existentes, seus riscos e impactos, além de informações que ajudam a compreender melhor esse assunto na sociedade atual."
  },
  justificativa: {
    texto_livre: "Pesquisar sobre as apostas é importante porque esse tema está cada vez mais presente no cotidiano das pessoas, principalmente com o crescimento das plataformas digitais e das propagandas nas redes sociais. O fácil acesso às apostas pode fazer com que muitas pessoas, inclusive jovens, tenham contato com esse assunto cada vez mais cedo. Além disso, a busca pela ideia de ganhar dinheiro rapidamente pode trazer consequências para a saúde mental, para a economia das famílias e para a vida social. Por isso, estudar esse tema ajuda a compreender seus riscos e a promover maior conscientização sobre o assunto.",
    impactos: [
      { categoria: "Jovens e Escola", icone: "Users", descricao: "Os jovens estão cada vez mais expostos a propagandas de apostas na internet, nas redes sociais e até durante transmissões esportivas. Essa exposição precoce pode fazer com que as apostas pareçam algo normal ou apenas uma forma de diversão, tornando importante que a escola contribua para a conscientização dos estudantes sobre os riscos envolvidos." },
      { categoria: "Saúde Mental", icone: "Activity", descricao: "A promessa de ganhar dinheiro rapidamente pode criar expectativas irreais e levar algumas pessoas a apostar repetidamente em busca de recuperar perdas ou conseguir ganhos maiores. Esse comportamento pode estar relacionado a problemas como ansiedade, estresse e dependência, afetando o bem-estar e a rotina da pessoa." },
      { categoria: "Economia Familiar", icone: "TrendingUp", descricao: "As apostas também podem prejudicar o orçamento familiar quando parte da renda é utilizada de forma frequente ou excessiva. As perdas acumuladas podem dificultar o pagamento de despesas importantes e, em situações mais graves, contribuir para o endividamento e o superendividamento das famílias." },
      { categoria: "Sociedade e Tecnologia", icone: "Globe", descricao: "As redes sociais, os influenciadores digitais e os algoritmos podem contribuir para a normalização das apostas ao mostrar esse tipo de conteúdo repetidamente para os usuários. A divulgação constante pode criar a impressão de que apostar é algo comum e fácil, especialmente quando são apresentados apenas possíveis ganhos e não os riscos e prejuízos envolvidos." }
    ]
  },
  objetivos: {
    geral: "Analisar o crescimento e a diversidade das apostas na sociedade, mostrando como elas estão presentes em diferentes áreas da vida e quais impactos podem causar nas pessoas.",
    especificos: [
      "Identificar os principais tipos de apostas existentes, incluindo apostas esportivas, acontecimentos do cotidiano e eventos futuros ou imprevisíveis.",
      "Investigar como as plataformas digitais e as redes sociais ampliaram as possibilidades de apostas, incluindo situações inusadas, como previsões sobre acontecimentos mundiais ou até eventos do dia a dia.",
      "Analisar os riscos e impactos das apostas, considerando a exposição de jovens, a saúde mental, a economia familiar e a influência da tecnologia e da publicidade."
    ]
  },
  desenvolvimento: {
    texto_livre: "As apostas são acordos em que as pessoas apostam em resultados futuros incertos, sendo as probabilidades (odds) definidas pelas casas de apostas. Existem basicamente dois sistemas: as apostas de cotas fixas, em que a odd é definida antecipadamente pela casa, e as apostas do tipo parimutuel, em que todas as apostas de uma rodada formam um fundo único dividido entre os vencedores, como ocorre nas loterias tradicionais.\n\nAlém dos mercados esportivos, que são os mais conhecidos, existem também apostas financeiras, sobre eventos sociais e políticos e até mercados considerados exóticos, envolvendo temas como resultados de eleições, prêmios da cultura pop ou fenômenos climáticos. Em geral, o lucro das casas de apostas vem da margem aplicada sobre as odds, o que faz com que, na maioria dos casos — principalmente em apostas combinadas ou de odds altas —, a tendência seja o apostador perder dinheiro a longo prazo.\n\nNo Brasil, as apostas têm uma longa história: o Jogo do Bicho surgiu em 1892 como uma espécie de loteria informal, e em 1917 foi criada a Loteria Federal, mesmo ano em que o governo proibiu os cassinos. Entre 1934 e 1946 os cassinos voltaram a ser permitidos, mas desde 1946 os jogos de azar foram novamente proibidos no país, restando oficialmente apenas as loterias estatais. Esse cenário só mudou de forma significativa no século XXI: em 2018 a Lei nº 13.756 liberou as apostas esportivas online no Brasil, e em 2023 a Lei nº 14.790 ampliou a regulamentação para todas as apostas de quota fixa. Desde janeiro de 2025, apenas empresas licenciadas pelo Ministério da Fazenda podem operar legalmente no país.\n\nA presença das apostas na mídia cresceu muito nos últimos anos, principalmente após a liberação de 2018. Grandes eventos esportivos, como a Copa do Mundo de 2022, atraíram investimentos estrangeiros e impulsionaram a publicidade do setor, a ponto de boa parte dos patrocínios master dos clubes de futebol das principais divisões brasileiras passar a vir de casas de apostas. Essa publicidade costuma destacar bônus e a possibilidade de ganhos fáceis, muitas vezes sem dar a mesma atenção aos riscos envolvidos, o que gerou debates sobre a necessidade de limites para esse tipo de propaganda.\n\nNas redes sociais, influenciadores digitais também têm papel importante na divulgação das apostas, apresentando-as muitas vezes como uma forma comum de entretenimento, usando links de afiliados ou mostrando resultados de apostas ao vivo. Esse tipo de conteúdo aproxima o público, especialmente os jovens, e contribui para normalizar o hábito de apostar. Some-se a isso o funcionamento dos algoritmos das redes sociais: ao perceber qualquer interesse do usuário em esportes ou apostas, o algoritmo passa a recomendar cada vez mais conteúdos e anúncios sobre o tema, criando um ciclo que aumenta a exposição e, consequentemente, a intenção de apostar.\n\nEm síntese, o cenário atual no Brasil é de acesso facilitado às apostas, tanto pelas transmissões esportivas e pela publicidade massiva quanto pelas redes sociais, em que algoritmos e influenciadores tornam o jogo algo cada vez mais comum. Entender os conceitos, o histórico e essas influências é fundamental para avaliar os riscos e discutir formas mais conscientes de regulamentação do setor.",
    tabela_tipos: [
      { tipo: "Esportivas", exemplos: "Partidas de futebol, corridas de cavalo, etc.", riscos: "Vício em jogos, perdas financeiras recorrentes, distração nos estudos ou no trabalho." },
      { tipo: "Financeiras / Mercado", exemplos: "Variações de ações, criptomoedas, índices (semelhante a \"trading\").", riscos: "Perda rápida de dinheiro, comportamento de especulação arriscada, conflitos com noções de investimento responsável." },
      { tipo: "Eventos Sociais / Políticos", exemplos: "Eleições, premiações, decisões governamentais.", riscos: "Manipulação de informação (boatos), expectativas frustradas, impacto psicológico ao lidar com temas sensíveis." },
      { tipo: "Exóticas / Curiosas", exemplos: "Casamento de famosos, catástrofes, curiosidades (clima, mídia).", riscos: "Sensacionalismo, crenças infundadas, normalização de apostas em acontecimentos absurdos." }
    ],
    regulamentacao: [
      { ano: "2018", titulo: "Lei 13.756", desc: "Legalização das apostas esportivas de quota fixa no Brasil (governo Temer), sem regulamentação detalhada." },
      { ano: "2023", titulo: "MP 1.182 e PL das Apostas", desc: "Governo edita Medida Provisória e Congresso aprova lei para tributar e regulamentar o setor." },
      { ano: "2024", titulo: "Portarias do Ministério da Fazenda", desc: "Definição de regras técnicas, de publicidade e sistemas contra lavagem de dinheiro e vício." },
      { ano: "2025+", titulo: "Mercado Regulado", desc: "Início oficial do mercado regulado. Apenas empresas licenciadas (domínio .bet.br) podem operar legalmente." }
    ]
  },
  metodologia: {
    texto_livre: "O trabalho foi realizado por meio de pesquisa bibliográfica e pesquisa de campo. Na pesquisa bibliográfica, foram consultados livros, artigos, sites institucionais, notícias e outras fontes confiáveis para compreender o funcionamento das apostas, seus impactos e sua regulamentação no Brasil.\n\nTambém foi realizada uma pesquisa de campo, utilizando um formulário online e perguntas presenciais. O grupo buscou ouvir pessoas de diferentes contextos, incluindo pessoas abordadas em espaços públicos e pessoas que estejam recebendo acompanhamento psicológico ou tratamento especializado relacionado a problemas com apostas. As entrevistas foram realizadas de forma voluntária e respeitosa, sem a identificação dos participantes.\n\nO objetivo foi comparar diferentes opiniões e experiências para compreender melhor como as apostas são percebidas pela sociedade e quais consequências podem estar associadas a elas. A quantidade de participantes foi definida conforme a disponibilidade das pessoas e dos locais visitados durante a realização da pesquisa.",
    etapas: [
      { titulo: "Definição do Tema e Hipóteses", desc: "Escolha do recorte temático e levantamento de hipóteses iniciais." },
      { titulo: "Revisão Bibliográfica", desc: "Pesquisa em artigos, notícias e leis para embasar teoricamente o trabalho." },
      { titulo: "Coleta de Dados", desc: "Aplicação de questionários estruturados com o público-alvo." },
      { titulo: "Análise e Conclusão", desc: "Tabulação dos dados, cruzamento de informações e redação final." }
    ]
  },
  conclusao: {
    texto_livre: "A partir da pesquisa realizada, o objetivo do trabalho foi alcançado, pois foi possível compreender melhor como as apostas estão presentes na sociedade e como seu alcance vai muito além das apostas esportivas. O grupo percebeu que atualmente existem apostas relacionadas a diversos acontecimentos, desde resultados de competições até acontecimentos futuros e situações do cotidiano.\n\nDurante o desenvolvimento do trabalho, também foi possível compreender que a popularização das apostas está relacionada ao crescimento das plataformas digitais, à publicidade, aos influenciadores e à facilidade de acesso por meio da internet. A principal descoberta do grupo foi perceber a grande variedade de situações que podem ser transformadas em possibilidades de aposta e como essa exposição pode contribuir para a normalização desse comportamento.\n\nDessa forma, o trabalho permitiu compreender que as apostas são um fenômeno que envolve não apenas entretenimento e dinheiro, mas também questões sociais, psicológicas, familiares e tecnológicas. A pesquisa também mostrou a importância de discutir o tema de maneira consciente e responsável, principalmente entre os jovens."
  },
  referencias: [
    { tipo: "Legislação", titulo: "Lei nº 14.790, de 29 de dezembro de 2023 (Lei das Apostas de Quota Fixa)", autor: "Governo Federal do Brasil", link: "#" },
    { tipo: "Fonte Oficial", titulo: "Secretaria de Prêmios e Apostas — regulamentação e funcionamento do mercado de apostas no Brasil", autor: "Ministério da Fazenda", link: "#" },
    { tipo: "Fonte Oficial", titulo: "Estudos e comunicados sobre apostas de quota fixa e seus impactos econômicos", autor: "Banco Central do Brasil", link: "#" },
    { tipo: "Organização Internacional", titulo: "Materiais sobre o transtorno do jogo e seus impactos na saúde", autor: "Organização Mundial da Saúde (OMS)", link: "#" },
    { tipo: "Artigo Acadêmico", titulo: "Pesquisas acadêmicas sobre jogos de azar, publicidade, saúde mental e comportamento de apostas", autor: "Diversos autores e pesquisadores", link: "#" }
  ],
  anexos: {
    texto_livre: "Não há anexos até o momento. Os questionários, gráficos e demais materiais produzidos durante a pesquisa de campo poderão ser acrescentados posteriormente, após a coleta e organização dos dados."
  }
};

const SECOES = [
  { id: "capa", titulo: "01 — Início" },
  { id: "introducao", titulo: "02 — Introdução" },
  { id: "justificativa", titulo: "03 — Justificativa e Impactos" },
  { id: "objetivos", titulo: "04 — Objetivos" },
  { id: "desenvolvimento", titulo: "05 — Contexto e Regulamentação" },
  { id: "metodologia", titulo: "06 — Metodologia" },
  { id: "resultados", titulo: "07 — Visualização de Dados" },
  { id: "conclusao", titulo: "08 — Conclusão" },
  { id: "referencias", titulo: "09 — Referências" }
];

// ============================================================================
// 2. COMPONENTES VISUAIS E UTILITÁRIOS AVANÇADOS
// ============================================================================

// Hook para animar elementos no Scroll (Intersection Observer)
const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

// Componente Wrapper para Animações
const Reveal = ({ children, delay = 0, type = 'fade-up', className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  
  const getAnimationClass = () => {
    if (!isVisible) {
      if (type === 'fade-up') return 'opacity-0 translate-y-12 blur-sm';
      if (type === 'fade') return 'opacity-0 blur-sm';
      if (type === 'scale') return 'opacity-0 scale-95 blur-sm';
      if (type === 'slide-right') return 'opacity-0 -translate-x-12 blur-sm';
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-none';
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:blur-none ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Aviso de Placeholder para os Alunos
const PlaceholderWarning = ({ text }) => {
  if (!text.includes("⚠️")) {
    const paragrafos = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    return (
      <>
        {paragrafos.map((p, i) => (
          <p key={i} className="leading-relaxed mb-5 last:mb-0">{p.trim()}</p>
        ))}
      </>
    );
  }
  return (
    <div className="flex items-start gap-3 p-5 border border-red-600/30 bg-red-600/10 rounded-xl text-red-800 dark:text-red-300 text-sm md:text-base font-medium shadow-inner">
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <p>{text}</p>
    </div>
  );
};

// Título de Seção Padronizado
const SectionTitle = ({ numero, titulo, subtitulo }) => (
  <Reveal type="fade-up" className="mb-16">
    <div className="flex items-center gap-5 mb-6">
      <PokerChip numero={numero} />
      <div className="h-px bg-gradient-to-r from-amber-600/40 dark:from-amber-400/30 to-transparent flex-1"></div>
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6">
      {titulo}
    </h2>
    {subtitulo && <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl font-light leading-relaxed">{subtitulo}</p>}
  </Reveal>
);

// Fundo Animado de Canvas (Roleta e Bolinha)
const RouletteBackground = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let wheelAngle = 0;
    let ballAngle = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawRoulette = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width * 0.8;
      const centerY = canvas.height * 0.5;
      const radius = Math.max(canvas.width, canvas.height) * 0.45;
      const innerRadius = radius * 0.7;
      
      // Configuração de cores e opacidade (visível, mas sem atrapalhar a leitura)
      ctx.globalAlpha = isDark ? 0.10 : 0.07;
      const colorRed = isDark ? '#ef4444' : '#dc2626';
      const colorBlack = isDark ? '#f3ead9' : '#1c1917'; // marfim no escuro, quase-preto quente no claro
      const colorGreen = '#d4af37'; // casa (zero) em dourado, remetendo à ficha/mesa de cassino
      
      // Rotação da Roda
      wheelAngle += 0.0015;
      ballAngle -= 0.012; // Bolinha gira no sentido oposto
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(wheelAngle);
      
      // Segmentos da roleta (37 números)
      const segments = 37;
      const angleStep = (Math.PI * 2) / segments;
      
      for (let i = 0; i < segments; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, i * angleStep, (i + 1) * angleStep);
        
        if (i === 0) {
          ctx.fillStyle = colorGreen;
        } else if (i % 2 === 0) {
          ctx.fillStyle = colorRed;
        } else {
          ctx.fillStyle = colorBlack;
        }
        ctx.fill();
        
        // Linhas divisórias
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Círculo interno
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#000000' : '#ffffff';
      ctx.fill();
      ctx.stroke();
      
      // Detalhes centrais
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = colorRed;
      ctx.lineWidth = 4;
      ctx.stroke();
      
      ctx.restore();
      
      // Rotação da Bolinha
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(ballAngle);
      
      // Bolinha Branca
      ctx.beginPath();
      // Bolinha rolando perto da borda do círculo interno
      ctx.arc(innerRadius + (radius - innerRadius) * 0.15, 0, radius * 0.015, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(255,255,255, 0.6)' : 'rgba(0,0,0, 0.4)';
      ctx.shadowColor = isDark ? '#ffffff' : '#000000';
      ctx.shadowBlur = 10;
      ctx.fill();
      
      ctx.restore();
      
      animationFrameId = requestAnimationFrame(drawRoulette);
    };

    drawRoulette();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// Decorações Temáticas (Cartas, Fichas, 777)
const CasinoDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* ♠ Espadas */}
      <div className="absolute top-[15%] left-[5%] text-zinc-900/[0.06] dark:text-white/[0.07] text-8xl md:text-[10rem] animate-[float_12s_ease-in-out_infinite]">
        ♠
      </div>
      {/* ♥ Copas */}
      <div className="absolute top-[45%] right-[8%] text-red-600/[0.08] dark:text-red-500/[0.14] text-7xl md:text-[8rem] animate-[float_15s_ease-in-out_infinite_reverse]">
        ♥
      </div>
      {/* ♦ Ouros */}
      <div className="absolute bottom-[20%] left-[10%] text-red-600/[0.08] dark:text-red-500/[0.14] text-6xl md:text-[7rem] animate-[float_18s_ease-in-out_infinite]">
        ♦
      </div>
      {/* ♣ Paus */}
      <div className="absolute top-[75%] right-[15%] text-zinc-900/[0.06] dark:text-white/[0.07] text-8xl md:text-[9rem] animate-[float_14s_ease-in-out_infinite_reverse]">
        ♣
      </div>
      {/* 777 Discreto */}
      <div className="absolute top-[30%] left-[60%] text-amber-500/[0.08] dark:text-amber-400/[0.1] font-black text-6xl md:text-[6rem] tracking-widest rotate-12 animate-[pulse_8s_ease-in-out_infinite]">
        777
      </div>

      {/* Ficha de cassino — vermelha */}
      <div className="absolute top-[8%] right-[22%] w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-dashed border-red-600/[0.12] dark:border-red-500/[0.18] animate-[float_16s_ease-in-out_infinite]" />
      {/* Ficha de cassino — dourada */}
      <div className="absolute bottom-[12%] right-[30%] w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-dashed border-amber-500/[0.14] dark:border-amber-400/[0.16] animate-[float_20s_ease-in-out_infinite_reverse]" />
      {/* Ficha de cassino — preta */}
      <div className="absolute top-[55%] left-[3%] w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-dashed border-zinc-900/[0.08] dark:border-white/[0.1] animate-[float_13s_ease-in-out_infinite]" />

      {/* Carta ilustrada flutuante (canto superior direito) */}
      <svg className="absolute -top-6 -right-10 md:top-2 md:right-4 w-40 h-56 md:w-56 md:h-80 opacity-[0.05] dark:opacity-[0.08] rotate-[12deg] animate-[float_17s_ease-in-out_infinite]" viewBox="0 0 140 200" fill="none">
        <rect x="4" y="4" width="132" height="192" rx="14" className="stroke-zinc-900 dark:stroke-white" strokeWidth="4" fill="none" />
        <text x="18" y="40" className="fill-red-600" fontSize="28" fontWeight="900">A</text>
        <text x="16" y="66" className="fill-red-600" fontSize="26">♥</text>
        <text x="122" y="176" className="fill-red-600" fontSize="28" fontWeight="900" textAnchor="end">A</text>
        <text x="124" y="150" className="fill-red-600" fontSize="26" textAnchor="end">♥</text>
      </svg>

      {/* Carta ilustrada flutuante (canto inferior esquerdo) */}
      <svg className="absolute -bottom-8 -left-10 md:bottom-4 md:left-6 w-36 h-52 md:w-48 md:h-72 opacity-[0.05] dark:opacity-[0.08] -rotate-[10deg] animate-[float_19s_ease-in-out_infinite_reverse]" viewBox="0 0 140 200" fill="none">
        <rect x="4" y="4" width="132" height="192" rx="14" className="stroke-zinc-900 dark:stroke-white" strokeWidth="4" fill="none" />
        <text x="18" y="40" className="fill-zinc-900 dark:fill-white" fontSize="28" fontWeight="900">K</text>
        <text x="16" y="66" className="fill-zinc-900 dark:fill-white" fontSize="26">♠</text>
        <text x="122" y="176" className="fill-zinc-900 dark:fill-white" fontSize="28" fontWeight="900" textAnchor="end">K</text>
        <text x="124" y="150" className="fill-zinc-900 dark:fill-white" fontSize="26" textAnchor="end">♠</text>
      </svg>
    </div>
  );
};

// Ficha de Poker — usada como marcador numerado das seções
const PokerChip = ({ numero }) => (
  <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full shadow-lg select-none"
    style={{
      background: 'repeating-conic-gradient(#b91c1c 0deg 30deg, #18181b 30deg 60deg)'
    }}>
    <div className="absolute inset-[6px] rounded-full bg-[#f7f2e4] dark:bg-[#07120d] border-2 border-dashed border-amber-500/60 flex items-center justify-center">
      <span className="font-mono font-black text-lg md:text-xl text-zinc-900 dark:text-white">{numero}</span>
    </div>
  </div>
);


// ============================================================================
// 3. APLICAÇÃO PRINCIPAL
// ============================================================================

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('capa');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Controle de Carregamento Inicial
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Efeito de Cursor e Dispositivo
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (!isTouchDevice) window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);

  // Efeito de Scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);

      const sections = SECOES.map(s => document.getElementById(s.id));
      let current = '';
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollY >= sectionTop - 300) current = section.id;
        }
      });
      if(current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  // Tela de Carregamento
  if (isLoading) {
    return (
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-500 ${isDark ? 'bg-[#07120d] text-[#f3ead9]' : 'bg-[#f7f2e4] text-zinc-900'}`}>
        <div className="relative flex items-center justify-center w-24 h-24 mb-8">
          <div className="absolute inset-0 border-t-2 border-red-600 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-zinc-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          {/* Substituído ícone de DB por um Target lembrando ficha/roleta */}
          <Target className="w-8 h-8 text-red-600 animate-pulse" />
        </div>
        <div className="overflow-hidden">
          <h1 className="text-2xl font-black tracking-widest uppercase animate-[slideUp_1s_ease-out]">
            Apostas<span className="text-red-600">.</span>Foco
          </h1>
        </div>
        <p className="text-xs font-mono text-zinc-500 mt-4 tracking-widest uppercase animate-pulse">Preparando Dados</p>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        `}} />
      </div>
    );
  }

  return (
    <div className={`${isDark ? 'dark bg-[#07120d] text-zinc-200' : 'bg-[#f7f2e4] text-zinc-800'} min-h-screen font-sans selection:bg-red-600/30 transition-colors duration-500 relative overflow-x-hidden`}>
      
      {/* Background Animado Roleta */}
      <RouletteBackground isDark={isDark} />
      
      {/* Elementos Decorativos Cassino */}
      <CasinoDecorations />

      {/* Custom Cursor Glow (Desktop Only) */}
      {!isTouchDevice && (
        <div 
          className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-[2] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 blur-[100px]"
          style={{ 
            left: mousePos.x, top: mousePos.y, 
            background: isDark ? 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, rgba(0,0,0,0) 70%)' : 'radial-gradient(circle, rgba(220,38,38,0.04) 0%, rgba(255,255,255,0) 70%)' 
          }}
        />
      )}

      {/* HEADER FIXO (Glassmorphism) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f2e4]/80 dark:bg-[#07120d]/80 backdrop-blur-xl border-b border-amber-900/10 dark:border-amber-500/10 transition-colors duration-500">
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-red-600 via-amber-400 to-red-600 transition-all duration-150 ease-out" style={{ width: `${scrollProgress * 100}%` }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 -ml-2 rounded-xl hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-all active:scale-95" aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden lg:flex items-center gap-3">
              <span className="font-bold tracking-widest text-sm border-r pr-3 border-zinc-300 dark:border-zinc-700">TCA</span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {SECOES.find(s => s.id === activeSection)?.titulo || '01 — Início'}
              </span>
            </div>
          </div>
          
          <div className="font-black tracking-widest text-xl cursor-pointer relative z-10" onClick={() => scrollTo('capa')}>
            APOSTAS<span className="text-red-700 dark:text-red-600">.</span>FOCO
          </div>

          <div className="flex items-center gap-2 relative z-10">
            <button onClick={handleShare} className="p-2.5 rounded-xl hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-all active:scale-95" aria-label="Compartilhar">
              <Share2 size={20} />
            </button>
            <button onClick={() => setIsDark(!isDark)} className="p-2.5 rounded-xl hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-all active:scale-95" aria-label="Alternar Tema">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* TOAST COMPARTILHAR */}
      {showShareToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3.5 rounded-2xl font-medium shadow-2xl shadow-red-600/20 flex items-center gap-3 animate-[slideUp_0.3s_ease-out]">
          <CheckCircle2 size={18} className="text-emerald-500" /> Link copiado para a área de transferência.
        </div>
      )}

      {/* MENU MOBILE / OVERLAY */}
      <div className={`fixed inset-0 z-40 bg-[#f7f2e4]/97 dark:bg-[#07120d]/97 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`max-w-3xl mx-auto px-6 h-full flex flex-col justify-center transition-transform duration-500 delay-100 ${isMenuOpen ? 'translate-y-0' : 'translate-y-12'}`}>
          <h3 className="text-xs font-mono text-red-700 dark:text-red-500 mb-8 tracking-widest uppercase border-l-2 border-red-600 pl-4">Navegação do Projeto</h3>
          <nav className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
            {SECOES.map((secao) => (
              <button
                key={secao.id}
                onClick={() => scrollTo(secao.id)}
                className={`text-left py-4 px-6 rounded-2xl text-xl md:text-2xl font-bold transition-all duration-300 flex items-center justify-between group
                  ${activeSection === secao.id 
                    ? 'bg-white dark:bg-zinc-900 text-red-700 dark:text-red-500 shadow-xl shadow-red-600/5' 
                    : 'hover:bg-white/50 dark:hover:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400'}`}
              >
                {secao.titulo}
                <ArrowRight size={24} className={`transition-all duration-300 ${activeSection === secao.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="relative z-10">
        
        {/* ===================================================================== */}
        {/* 01. CAPA (HERO) */}
        {/* ===================================================================== */}
        <section id="capa" className="min-h-screen flex flex-col justify-center relative px-6 pt-20 overflow-hidden">

          {/* Roleta ilustrada — elemento de assinatura visual da capa */}
          <svg
            viewBox="0 0 400 400"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130vw] max-w-none md:w-[900px] md:max-w-[900px] opacity-[0.08] dark:opacity-[0.12] pointer-events-none animate-[wheelSpin_50s_linear_infinite]"
            aria-hidden="true"
          >
            <circle cx="200" cy="200" r="196" fill="none" stroke="#d4af37" strokeWidth="6" />
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16;
              const isGold = i === 0;
              return (
                <path
                  key={i}
                  d="M200,200 L200,10 A190,190 0 0,1 226.4,12.2 Z"
                  fill={isGold ? '#d4af37' : i % 2 === 0 ? '#b91c1c' : '#111114'}
                  transform={`rotate(${angle} 200 200)`}
                />
              );
            })}
            <circle cx="200" cy="200" r="120" className="fill-[#f7f2e4] dark:fill-[#07120d]" stroke="#d4af37" strokeWidth="4" />
            <circle cx="200" cy="200" r="34" fill="none" stroke="#b91c1c" strokeWidth="5" />
            <circle cx="200" cy="200" r="6" fill="#d4af37" />
          </svg>

          <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
            
            <Reveal delay={100} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-10 text-zinc-600 dark:text-zinc-300 shadow-sm">
              <Target size={14} className="text-red-600" />
              {DADOS_DO_PROJETO.capa.escola}
            </Reveal>
            
            <Reveal delay={300} type="fade-up">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.85]">
                {DADOS_DO_PROJETO.capa.titulo.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 dark:from-red-600 dark:to-rose-400' : 'text-zinc-900 dark:text-white'}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </Reveal>
            
            <Reveal delay={500} type="fade-up">
              <p className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-300 max-w-3xl font-light tracking-wide mb-16 leading-relaxed">
                {DADOS_DO_PROJETO.capa.subtitulo}
              </p>
            </Reveal>
            
            <Reveal delay={700} type="fade" className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-y border-zinc-200 dark:border-zinc-800 py-10 w-full max-w-4xl bg-white/30 dark:bg-zinc-900/30 backdrop-blur-sm rounded-3xl px-8 shadow-sm">
              <div>
                <p className="text-[10px] font-mono text-red-700 dark:text-red-500 uppercase tracking-widest mb-2 font-bold">Pesquisadores</p>
                <p className="font-medium text-sm md:text-base leading-snug">{DADOS_DO_PROJETO.capa.integrantes}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-red-700 dark:text-red-500 uppercase tracking-widest mb-2 font-bold">Turma</p>
                <p className="font-medium text-sm md:text-base leading-snug">{DADOS_DO_PROJETO.capa.turma}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-red-700 dark:text-red-500 uppercase tracking-widest mb-2 font-bold">Docente</p>
                <p className="font-medium text-sm md:text-base leading-snug">{DADOS_DO_PROJETO.capa.professor}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-red-700 dark:text-red-500 uppercase tracking-widest mb-2 font-bold">Orientação</p>
                <p className="font-medium text-sm md:text-base leading-snug">{DADOS_DO_PROJETO.capa.orientador}</p>
              </div>
            </Reveal>

            <Reveal delay={1000} type="fade">
              <button onClick={() => scrollTo('introducao')} className="mt-20 flex flex-col items-center text-zinc-400 hover:text-amber-500 transition-colors group">
                <span className="text-[10px] font-mono tracking-widest mb-4 uppercase">Explorar Pesquisa</span>
                <div className="w-[1px] h-16 bg-zinc-300 dark:bg-zinc-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-600 to-amber-400 animate-[scrollLine_2s_ease-in-out_infinite]"></div>
                </div>
              </button>
            </Reveal>

          </div>
        </section>

        {/* ===================================================================== */}
        {/* CONTAINER GERAL DAS SEÇÕES DE TEXTO */}
        {/* ===================================================================== */}
        <div className="max-w-5xl mx-auto px-6 py-24 space-y-40">
          
          {/* 02. INTRODUÇÃO */}
          <section id="introducao" className="scroll-mt-40">
            <SectionTitle numero="02" titulo="Introdução" subtitulo="Visão geral e delimitação do objeto de estudo." />
            
            <Reveal delay={200}>
              <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
                <div className="relative p-8 md:p-10 bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none mb-12 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
                  <div className="absolute -right-10 -top-10 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                    <Globe size={200} />
                  </div>
                  <p className="text-2xl font-light leading-relaxed relative z-10 text-zinc-800 dark:text-zinc-200">
                    {DADOS_DO_PROJETO.introducao.tema}
                  </p>
                </div>
                
                <PlaceholderWarning text={DADOS_DO_PROJETO.introducao.texto_livre} />
              </div>
            </Reveal>
          </section>

          {/* 03. JUSTIFICATIVA E IMPACTOS */}
          <section id="justificativa" className="scroll-mt-40">
            <SectionTitle numero="03" titulo="Justificativa e Impactos" subtitulo="A relevância social e os reflexos do avanço das apostas no tecido social brasileiro." />
            
            <Reveal>
              <div className="mb-16 prose prose-lg dark:prose-invert max-w-none">
                <PlaceholderWarning text={DADOS_DO_PROJETO.justificativa.texto_livre} />
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h3 className="text-sm font-mono text-red-700 dark:text-red-500 mb-8 tracking-widest uppercase font-bold flex items-center gap-2">
                <Activity size={16} /> Mapeamento de Impactos
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DADOS_DO_PROJETO.justificativa.impactos.map((impacto, idx) => {
                // Seleção de ícone baseada na string
                const IconComponent = 
                  impacto.icone === 'Users' ? Users :
                  impacto.icone === 'Activity' ? Activity :
                  impacto.icone === 'TrendingUp' ? TrendingUp : Globe;

                return (
                  <Reveal key={idx} delay={idx * 150} type="fade-up">
                    <div className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/10 hover:border-red-600/30 overflow-hidden h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-14 h-14 bg-zinc-50 dark:bg-black border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center text-red-700 dark:text-red-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <IconComponent size={24} />
                      </div>
                      
                      <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white relative z-10">{impacto.categoria}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 relative z-10">
                        {impacto.descricao.includes("⚠️") ? <span className="text-amber-600 dark:text-amber-500 font-medium">{impacto.descricao}</span> : impacto.descricao}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </section>

          {/* 04. OBJETIVOS */}
          <section id="objetivos" className="scroll-mt-40">
            <SectionTitle numero="04" titulo="Objetivos da Pesquisa" />
            
            <Reveal type="scale">
              <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 p-10 md:p-16 rounded-[2.5rem] mb-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-5">
                  <BarChart3 size={250} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent pointer-events-none"></div>
                
                <h3 className="text-xs font-mono tracking-widest uppercase mb-6 opacity-70 font-bold border-b border-white/20 dark:border-black/10 pb-4 inline-block">Objetivo Macro</h3>
                <p className="text-2xl md:text-4xl font-medium leading-tight relative z-10 max-w-3xl">
                  {DADOS_DO_PROJETO.objetivos.geral.includes("⚠️") ? <span className="text-amber-400 dark:text-amber-600">{DADOS_DO_PROJETO.objetivos.geral}</span> : DADOS_DO_PROJETO.objetivos.geral}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="text-sm font-mono text-red-700 dark:text-red-500 mb-8 tracking-widest uppercase font-bold">Objetivos Específicos</h3>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DADOS_DO_PROJETO.objetivos.especificos.map((obj, idx) => (
                <Reveal key={idx} delay={idx * 150} type="slide-right">
                  <div className="group bg-white dark:bg-zinc-900/80 backdrop-blur-sm p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-red-600/50 transition-colors h-full">
                    <div className="font-mono text-4xl font-black text-amber-500/20 dark:text-amber-400/15 mb-6 group-hover:text-red-500/30 dark:group-hover:text-red-500/30 transition-colors">0{idx + 1}</div>
                    <div className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {obj.includes("⚠️") ? <span className="text-amber-600 dark:text-amber-500 font-medium">{obj}</span> : obj}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 05. DESENVOLVIMENTO & REGULAMENTAÇÃO (TIMELINE) */}
          <section id="desenvolvimento" className="scroll-mt-40">
            <SectionTitle numero="05" titulo="Contexto e Regulamentação" subtitulo="Fundamentação teórica e a evolução das leis no Brasil." />
            
            <Reveal>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                <PlaceholderWarning text={DADOS_DO_PROJETO.desenvolvimento.texto_livre} />
              </div>
            </Reveal>

            {/* Tabela: Tipos de Apostas e Riscos */}
            <Reveal delay={100}>
              <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none mb-20 overflow-x-auto">
                <div className="flex items-center gap-4 mb-10">
                  <BarChart3 className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl md:text-3xl font-black">Tipos de Apostas e Principais Riscos</h3>
                </div>
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800">
                      <th className="py-4 pr-4 font-mono text-xs uppercase tracking-widest text-red-600">Tipo de Aposta</th>
                      <th className="py-4 pr-4 font-mono text-xs uppercase tracking-widest text-red-600">Exemplos</th>
                      <th className="py-4 pr-4 font-mono text-xs uppercase tracking-widest text-red-600">Principais Riscos / Impactos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DADOS_DO_PROJETO.desenvolvimento.tabela_tipos.map((linha, idx) => (
                      <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800/60 align-top">
                        <td className="py-5 pr-4 font-bold text-zinc-900 dark:text-white whitespace-nowrap">{linha.tipo}</td>
                        <td className="py-5 pr-4 text-zinc-600 dark:text-zinc-400">{linha.exemplos}</td>
                        <td className="py-5 pr-4 text-zinc-600 dark:text-zinc-400">{linha.riscos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Timeline Interativa */}
            <Reveal delay={200}>
              <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-16 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none">
                <div className="flex items-center gap-4 mb-16">
                  <Scale className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl md:text-3xl font-black">Evolução Legal no Brasil</h3>
                </div>

                <div className="relative">
                  {/* Linha vertical central */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-zinc-300 dark:via-zinc-700 to-transparent md:-translate-x-1/2"></div>
                  
                  <div className="space-y-12">
                    {DADOS_DO_PROJETO.desenvolvimento.regulamentacao.map((item, idx) => {
                      const isLeft = idx % 2 === 0;
                      return (
                        <Reveal key={idx} delay={idx * 200} type={isLeft ? 'slide-right' : 'slide-right'} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                          
                          {/* Ponto na timeline */}
                          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-red-600 border-4 border-white dark:border-zinc-900 md:-translate-x-1/2 mt-1 md:mt-0 z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                          
                          {/* Conteúdo Desktop (Alternado) */}
                          <div className={`hidden md:block w-1/2 ${isLeft ? 'pr-16 text-right' : 'pl-16 ml-auto'}`}>
                            <div className="font-mono text-red-700 dark:text-red-500 font-bold text-xl mb-2">{item.ano}</div>
                            <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{item.titulo}</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                          </div>

                          {/* Conteúdo Mobile (Sempre alinhado à esquerda com padding) */}
                          <div className="md:hidden pl-12 w-full">
                            <div className="font-mono text-red-700 dark:text-red-500 font-bold text-lg mb-1">{item.ano}</div>
                            <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.titulo}</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* 06. METODOLOGIA */}
          <section id="metodologia" className="scroll-mt-40">
            <SectionTitle numero="06" titulo="Metodologia" subtitulo="O caminho percorrido para a construção do conhecimento." />
            
            <Reveal>
              <div className="mb-16 prose prose-lg dark:prose-invert max-w-none">
                <PlaceholderWarning text={DADOS_DO_PROJETO.metodologia.texto_livre} />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DADOS_DO_PROJETO.metodologia.etapas.map((etapa, idx) => (
                <Reveal key={idx} delay={idx * 100} type="fade-up">
                  <div className="bg-zinc-50 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl h-full flex flex-col relative overflow-hidden group hover:bg-white dark:hover:bg-zinc-900 transition-colors">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/20 transition-colors"></div>
                    <div className="font-mono text-sm text-red-600 font-bold tracking-widest uppercase mb-4">Etapa {idx + 1}</div>
                    <h4 className="text-xl font-bold mb-4">{etapa.titulo}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1">{etapa.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 07. VISUALIZAÇÃO DE DADOS (RESULTADOS) */}
          <section id="resultados" className="scroll-mt-40 relative">
            <SectionTitle numero="07" titulo="Visualização de Dados" subtitulo="Análise quantitativa e qualitativa das informações coletadas." />
            
            <Reveal type="fade-up">
              {/* Painel Profissional de Espera de Dados */}
              <div className="relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-10 md:p-20 overflow-hidden text-center shadow-xl shadow-zinc-200/20 dark:shadow-none min-h-[500px] flex flex-col items-center justify-center">
                
                {/* Efeito visual de fundo simulando gráficos (Borrado intencionalmente) */}
                <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none flex items-end justify-center gap-4 px-10 pb-10 blur-md">
                  <div className="w-16 h-32 bg-red-600 rounded-t-lg"></div>
                  <div className="w-16 h-64 bg-red-500 rounded-t-lg"></div>
                  <div className="w-16 h-48 bg-rose-500 rounded-t-lg"></div>
                  <div className="w-16 h-80 bg-red-700 rounded-t-lg"></div>
                  <div className="w-16 h-24 bg-zinc-500 rounded-t-lg"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <Clock size={40} className="text-red-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6">Coleta em Andamento</h3>
                  <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
                    Os painéis interativos de dados serão habilitados automaticamente nesta seção assim que a pesquisa de campo for concluída e os resultados forem tabulados.
                  </p>
                  
                  <div className="inline-flex items-center gap-3 bg-red-50 dark:bg-red-600/10 text-red-800 dark:text-red-300 px-6 py-3 rounded-full font-medium text-sm">
                    <Lock size={16} /> Dashboard bloqueado temporariamente
                  </div>
                </div>
                
                {/* Borda animada */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50 animate-[pulse_3s_ease-in-out_infinite]"></div>
              </div>
            </Reveal>
          </section>

          {/* 08. CONCLUSÃO */}
          <section id="conclusao" className="scroll-mt-40">
            <SectionTitle numero="08" titulo="Conclusão" subtitulo="Síntese da pesquisa e considerações finais da equipe." />
            
            <Reveal>
              <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-sm p-10 md:p-16 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
                <PlaceholderWarning text={DADOS_DO_PROJETO.conclusao.texto_livre} />
              </div>
            </Reveal>
          </section>

          {/* 09. REFERÊNCIAS */}
          <section id="referencias" className="scroll-mt-40 mb-20">
            <SectionTitle numero="09" titulo="Referências Bibliográficas" subtitulo="Fontes oficiais, artigos acadêmicos e reportagens utilizadas." />
            
            <div className="grid gap-4">
              {DADOS_DO_PROJETO.referencias.map((ref, idx) => (
                <Reveal key={idx} delay={idx * 100} type="fade-up">
                  <a href={ref.link} target="_blank" rel="noreferrer" className="flex items-start gap-6 p-6 md:p-8 bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-all duration-300 group hover:shadow-xl hover:shadow-red-600/5">
                    <div className="mt-1 text-amber-700 dark:text-amber-400 group-hover:text-red-600 group-hover:rotate-12 transition-all duration-300 bg-amber-50 dark:bg-amber-500/10 p-3 rounded-xl">
                      <LinkIcon size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-red-600 mb-2 font-bold">{ref.tipo}</div>
                      <div className={`font-bold text-xl mb-2 text-zinc-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors ${ref.titulo.includes("⚠️") ? "text-amber-500" : ""}`}>
                        {ref.titulo}
                      </div>
                      <div className="text-zinc-600 dark:text-zinc-400">{ref.autor}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER PROFISSIONAL */}
      <footer className="relative border-t border-amber-900/10 dark:border-amber-500/10 bg-[#f7f2e4] dark:bg-[#07120d] py-20 px-6 z-10 overflow-hidden">
        {/* Efeito de Fundo Footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-widest mb-2">
              APOSTAS<span className="text-red-600">.</span>FOCO
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
              Trabalho de Conclusão de Curso (TCA). Finalidade exclusivamente educativa, documental e de pesquisa acadêmica.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
              <ShieldAlert size={14} className="text-red-600" /> Site Acadêmico Oficial
            </div>
            <div className="text-xs font-mono text-zinc-400 mt-2">
              {DADOS_DO_PROJETO.capa.escola} • {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>

      {/* Global Styles Extras */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wheelSpin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.5);
        }
      `}} />

    </div>
  );
}