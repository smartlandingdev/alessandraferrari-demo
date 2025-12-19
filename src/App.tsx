import { useState, useEffect } from 'react'
import './App.css'
import advogadaImg from './assets/advogada.png'
import justicaImg from './assets/justica.jpg'
import equipeEscritorioImg from './assets/equipe-escritorio.jpg'
import escritorioImg from './assets/escritorio.png'
import logoImg from './assets/LOGO (1).png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedBeneficio, setSelectedBeneficio] = useState<string | null>(null)
  const [showChatPopup, setShowChatPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Mostrar chat popup após 3 segundos
    const timer = setTimeout(() => {
      setShowChatPopup(true)
      // Reproduzir som de notificação
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGmi77eifTRAIUKfu8LhjHAU7k9r0ynYpBSh+zPLaizsIHGm98Oedsg0LTqTk9L1oIgYuhNHx1Ik5CBpqvO/mnk0SC1Km5/S6ZCEGK4HP8tmJNggaab3v55xMEAhPpe/zuWMcBTuU2vPJdykHKH3L89+MOwcbaL3v6J9NEQpPpOfzvGkcBi2D0fHWiDkIGmm+8OibTBELUKXn87pkHwUrg9Hx1Ig2CBppvfDnnU0RClCm6PS5ZBwGLYPQ8daIOwgaabzw6J9NEQtQqOj1vGkiBi6D0PHWiToIGmm97+icTBELUKbo9LpkHQUrg9Hx1og2CBto/u/pn00RClCl6PS7aB4GMYPs8teIPAgaabzw6J9MEAtPpuj0u2kiBjCE0fHWiDwHGmq+7+mfThILUKXo9LxpHwUug9Hx1og7Bxtpve/pn04RClCl6PW7aCIGMITR8dWIPQgaabzw6Z9OEQtPpOj0vGkiBi+C0fHWiDwHGmm97+mfThILUKXn9LxpIQYug9Dx1og6CBppvfDpn04SC1Cm6PS7aCIGMIPR8daIOwgaabzw6Z9OEQpPpef0u2kiBjCC0fHWiTsIGmm97+mfThEKT6Xo9Ltqnl')
      audio.volume = 0.3
      audio.play().catch(() => {
        // Ignorar erro se o usuário não interagiu ainda com a página
      })
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const beneficiosInfo: { [key: string]: { titulo: string; descricao: string } } = {
    'idade': {
      titulo: 'Aposentadoria por Idade (Rural ou Urbana)',
      descricao: 'A aposentadoria por idade é concedida aos segurados urbanos que completaram 65 anos (homens) ou 62 anos (mulheres), com no mínimo 15 anos de contribuição. Para trabalhadores rurais, a idade mínima é de 60 anos para homens e 55 anos para mulheres. Analisamos toda a documentação necessária e orientamos sobre como comprovar o tempo de atividade rural, garantindo que você receba o benefício com o melhor valor possível.'
    },
    'tempo': {
      titulo: 'Aposentadoria por Tempo de Contribuição',
      descricao: 'Para quem contribuiu antes da Reforma da Previdência (13/11/2019), ainda é possível se aposentar por tempo de contribuição através das regras de transição. Analisamos seu histórico contributivo completo, identificamos períodos que podem ser incluídos e calculamos qual regra de transição é mais vantajosa para o seu caso, garantindo a melhor data de aposentadoria e o maior valor de benefício.'
    },
    'especial': {
      titulo: 'Aposentadoria Especial – Atividades Insalubres',
      descricao: 'Trabalhadores expostos a agentes nocivos à saúde (ruído, calor, frio, produtos químicos, agentes biológicos, etc.) têm direito à aposentadoria especial com tempo reduzido de contribuição: 15, 20 ou 25 anos, dependendo do grau de exposição. Realizamos análise técnica de PPP, LTCAT e outros documentos, convertemos tempo especial em comum quando vantajoso, e lutamos pelo reconhecimento da atividade especial mesmo quando a empresa não forneceu a documentação adequada.'
    },
    'invalidez': {
      titulo: 'Aposentadoria por Invalidez / Auxílio-Doença / Auxílio-Acidente',
      descricao: 'Quando problemas de saúde impedem ou dificultam o trabalho, você pode ter direito a esses benefícios. A aposentadoria por invalidez é concedida quando há incapacidade total e permanente. O auxílio-doença é para incapacidade temporária. O auxílio-acidente é uma indenização para sequelas que reduzem a capacidade laboral. Auxiliamos na preparação para perícia médica, contestamos indeferimentos injustos e garantimos que suas limitações sejam devidamente reconhecidas pelo INSS.'
    },
    'pensao': {
      titulo: 'Pensão por Morte',
      descricao: 'A pensão por morte é devida aos dependentes do segurado que faleceu, seja ele aposentado ou não. O benefício garante proteção financeira à família em momento de dificuldade. Orientamos sobre quem tem direito (cônjuge, filhos, pais), qual a documentação necessária, como fazer o requerimento e como garantir o recebimento retroativo desde a data do óbito. Também atuamos em casos de pensão negada injustamente.'
    },
    'revisao': {
      titulo: 'Revisões de Benefícios e Desaposentação',
      descricao: 'Muitos benefícios são concedidos com valores incorretos ou deixam de considerar períodos contributivos. Realizamos análise detalhada do seu benefício para identificar possibilidade de revisão e aumento do valor. A desaposentação permite renunciar à aposentadoria atual para obter uma nova, mais vantajosa, utilizando contribuições feitas após a primeira aposentadoria. Calculamos a viabilidade e conduzimos todo o processo judicial quando necessário.'
    },
    'calculos': {
      titulo: 'Cálculos e Simulações Previdenciárias Personalizadas',
      descricao: 'Antes de tomar qualquer decisão sobre aposentadoria, é fundamental saber qual a melhor opção para o seu caso. Realizamos cálculos previdenciários detalhados e simulações comparativas entre diferentes regras (idade, tempo de contribuição, especial, regras de transição), identificamos a melhor data para se aposentar, calculamos quanto você receberá em cada cenário e orientamos sobre estratégias para aumentar o valor do benefício. Planejamento previdenciário é essencial para garantir uma aposentadoria digna.'
    }
  }

  const openModal = (beneficioKey: string) => {
    setSelectedBeneficio(beneficioKey)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedBeneficio(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="app">
      {/* Header Transparente */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-top">
          <div className="container">
            <div className="contact-info">
              <a href="mailto:contato@advalessandraferrari.com.br" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4L8 8L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                contato@advalessandraferrari.com.br
              </a>
              <a href="tel:+554533068111" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 1.5C3.5 1.5 4.5 1.5 5 2.5C5.5 3.5 6 4.5 5.5 5C5 5.5 4.5 6 5.5 7.5C7 9 8 9.5 8.5 9C9 8.5 9.5 8 10.5 8.5C11.5 9 12.5 10 12.5 10C12.5 10 13.5 11.5 11.5 13C9.5 14.5 4.5 11 2 6.5C-0.5 2 1.5 1.5 3.5 1.5Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                (45) 3306-8111
              </a>
            </div>
          </div>
        </div>
        <nav className="nav-main">
          <div className="container">
            <div className="nav-content">
              <div className="logo">
                <img src={logoImg} alt="Alessandra Ferrari Advogados" className="logo-img" />
              </div>
              <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
                <li><a href="#areas" onClick={() => setIsMenuOpen(false)}>Áreas de Atuação</a></li>
                <li><a href="#equipe" onClick={() => setIsMenuOpen(false)}>Equipe</a></li>
                <li><a href="#cases" onClick={() => setIsMenuOpen(false)}>Cases</a></li>
                <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
              </ul>
              <button
                className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop" alt="Advocacia Previdencialista" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Por que contratar um advogado <span className="hero-highlight">previdenciarista</span>?</h1>
          <p className="hero-subtitle">Porque seu benefício no INSS exige estratégia, não tentativa.</p>
          <div className="hero-buttons">
            <a href="#sobre" className="hero-btn hero-btn-primary">
              Ferrari & Associados
            </a>
          </div>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="areas" className="section-areas">
        <div className="container">
          <div className="quem-somos-layout">
            <div className="quem-somos-text">
              <h2 className="section-title quem-somos-title">Quem Somos</h2>
              <div className="quem-somos-divider"></div>
              <p className="quem-somos-intro">Localizado em Cascavel/PR, o escritório atua há anos prestando assessoria jurídica exclusiva na área previdenciária. Atendemos clientes de toda a região, acompanhando todas as fases do processo.</p>
              <p className="quem-somos-footer">Trabalhamos com foco em oferecer ao cliente informações claras, segurança jurídica e resultados consistentes.</p>
            </div>

            <div className="quem-somos-image">
              <img src="https://storage.alboom.ninja/sites/32632/albuns/1172894/ensaio-escritorio-advocacia-rj-422.jpg?t=1682972164" alt="Equipe Alessandra Ferrari" className="quem-somos-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Por que contar com um advogado */}
      <section className="section-porque">
        <div className="container">
          <h2 className="section-title centered">Por que contar com um advogado previdenciarista?</h2>
          <div className="porque-content">
            <p className="porque-intro">O sistema previdenciário brasileiro possui regras complexas e passou por mudanças profundas após a Reforma da Previdência. Sem orientação, é comum ocorrer:</p>

            <div className="porque-grid">
              <div className="porque-col">
                <h3>Problemas Comuns</h3>
                <ul className="porque-list problemas">
                  <li>Negativa indevida de benefícios</li>
                  <li>Concessão com valor menor do que o devido</li>
                  <li>Problemas para comprovar tempo de serviço</li>
                  <li>Perda de direitos por falta de documentos ou prazos</li>
                  <li>Dificuldades em perícias médicas</li>
                </ul>
              </div>

              <div className="porque-col">
                <h3>Com um Advogado Especializado</h3>
                <ul className="porque-list solucoes">
                  <li>Análise completa do seu histórico de contribuições</li>
                  <li>Preparação correta de documentos e provas</li>
                  <li>Acompanhamento em perícias</li>
                  <li>Recursos administrativos fundamentados</li>
                  <li>Ajuizamento de ação quando necessário</li>
                  <li>Muito mais segurança e chances reais de aprovação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Escritório */}
      <section id="sobre" className="section-sobre">
        <div className="container">
          <div className="sobre-grid sobre-grid-reverse">
            <div className="sobre-image">
              <div className="sobre-circle-bg"></div>
              <img src={escritorioImg} alt="Escritório Alessandra Ferrari" className="sobre-img" />
            </div>
            <div className="sobre-content">
              <h2 className="section-title sobre-title">Sobre o Escritório</h2>
              <div className="sobre-divider"></div>
              <p className="sobre-text">
                O escritório Alessandra Ferrari Advocacia atua com dedicação exclusiva ao Direito Previdenciário. Nosso trabalho é oferecer um atendimento humanizado, análise minuciosa do caso e orientação completa em todas as etapas do processo.
              </p>
              <p className="sobre-text">
                Acompanhamos desde o primeiro atendimento até o resultado final, garantindo que cada cliente receba o benefício que realmente tem direito — com segurança jurídica, transparência e agilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Atendidos */}
      <section id="beneficios" className="section-beneficios">
        <div className="container">
          <h2 className="section-title centered beneficios-title">Benefícios Atendidos</h2>
          <div className="beneficios-grid-simple">
            <div className="beneficio-card" onClick={() => openModal('idade')}>
              <h3>Aposentadoria por Idade (Rural ou Urbana)</h3>
              <button className="beneficio-btn">Ver mais informações</button>
            </div>
            <div className="beneficio-card" onClick={() => openModal('tempo')}>
              <h3>Aposentadoria por Tempo de Contribuição</h3>
              <button className="beneficio-btn">Ver mais informações</button>
            </div>
            <div className="beneficio-card" onClick={() => openModal('especial')}>
              <h3>Aposentadoria Especial – Atividades Insalubres</h3>
              <button className="beneficio-btn">Ver mais informações</button>
            </div>
            <div className="beneficio-card" onClick={() => openModal('invalidez')}>
              <h3>Aposentadoria por Invalidez / Auxílio-Doença / Auxílio-Acidente</h3>
              <button className="beneficio-btn">Ver mais informações</button>
            </div>
            <div className="beneficio-card" onClick={() => openModal('pensao')}>
              <h3>Pensão por Morte</h3>
              <button className="beneficio-btn">Ver mais informações</button>
            </div>
            <div className="beneficio-card" onClick={() => openModal('revisao')}>
              <h3>Revisões de Benefícios e Desaposentação</h3>
              <button className="beneficio-btn">Ver mais informações</button>
            </div>
            <div className="beneficio-card" onClick={() => openModal('calculos')}>
              <h3>Cálculos e Simulações Previdenciárias Personalizadas</h3>
              <button className="beneficio-btn">Ver mais informações</button>
            </div>
          </div>
        </div>
      </section>

      {/* Saiba Mais - Direito Previdencialista */}
      <section className="section-saiba-mais">
        <div className="container">
          <h2 className="section-title centered">Advocacia Previdencialista: Protegendo Seus Direitos</h2>
          <div className="saiba-mais-intro">
            <p>O advogado previdenciarista é o profissional especializado em garantir que trabalhadores, aposentados e pensionistas tenham acesso pleno aos benefícios previdenciários. Nossa atuação abrange desde a orientação inicial até a conquista judicial do seu direito.</p>
          </div>
          <div className="saiba-mais-grid">
            <div className="saiba-mais-card">
              <div className="saiba-mais-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Análise Técnica Especializada</h3>
              <p>Revisamos todo o histórico contributivo, identificamos períodos que podem ser incluídos, analisamos documentos e calculamos o melhor cenário para sua aposentadoria.</p>
            </div>
            <div className="saiba-mais-card">
              <div className="saiba-mais-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Acompanhamento Integral</h3>
              <p>Desde o primeiro contato até a concessão do benefício, você terá suporte em todas as etapas: pedidos administrativos, perícias médicas, recursos e ações judiciais.</p>
            </div>
            <div className="saiba-mais-card">
              <div className="saiba-mais-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Atendimento Personalizado</h3>
              <p>Cada caso é único. Oferecemos orientação individualizada, explicando suas opções de forma clara e ajudando você a tomar as melhores decisões sobre seu futuro.</p>
            </div>
            <div className="saiba-mais-card">
              <div className="saiba-mais-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>Segurança Jurídica</h3>
              <p>Evite negativas injustas, benefícios com valores incorretos e perda de direitos. Com assessoria especializada, você tem a certeza de estar recebendo exatamente o que lhe é devido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="section-localizacao">
        <div className="container">
          <h2 className="section-title centered localizacao-title">Localização</h2>
          <div className="localizacao-divider"></div>
          <div className="localizacao-grid">
            <div className="localizacao-info">
              <h3 className="localizacao-nome">ALESSANDRA FERRARI & ADVOGADOS ASSOCIADOS</h3>
              <div className="localizacao-items">
                <div className="localizacao-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p>Rua São Paulo, 707, Sala 101</p>
                    <p>Edifício Mariga, 1º andar, Centro</p>
                    <p>Cascavel/PR - CEP 85.801-020</p>
                  </div>
                </div>
                <div className="localizacao-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <p>(45) 3306-8111</p>
                    <p>(45) 9 9900-6007 (TIM) - WhatsApp</p>
                  </div>
                </div>
                <div className="localizacao-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <p>contato@advalessandraferrari.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="localizacao-mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7889765893857!2d-53.45694492372736!3d-24.95589977780956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d4f5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sRua%20S%C3%A3o%20Paulo%2C%20707%20-%20Centro%2C%20Cascavel%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Alessandra Ferrari Advogados"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section-contato">
        <div className="container">
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logoImg} alt="Alessandra Ferrari Advogados" className="footer-logo-img" />
              <p className="footer-tagline">Devotos à Justiça</p>
            </div>
            <div className="footer-links">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#areas">Áreas de Atuação</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <p>Rua São Paulo, 707, Sl. 101<br/>Centro, Cascavel/PR</p>
              <p>(45) 3306-8111</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Alessandra Ferrari & Advogados Associados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Benefícios */}
      {selectedBeneficio && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="modal-title">{beneficiosInfo[selectedBeneficio].titulo}</h2>
            <p className="modal-description">{beneficiosInfo[selectedBeneficio].descricao}</p>
            <a href="#contato" className="modal-cta" onClick={closeModal}>
              Entre em contato para saber mais
            </a>
          </div>
        </div>
      )}

      {/* Chat Popup */}
      {showChatPopup && (
        <div className={`chat-popup ${showChatPopup ? 'chat-popup-show' : ''}`}>
          <button
            className="chat-popup-close"
            onClick={() => setShowChatPopup(false)}
            aria-label="Fechar chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="chat-popup-content">
            <div className="chat-popup-avatar">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
                alt="Atendente"
                className="chat-popup-avatar-img"
              />
              <div className="chat-popup-status"></div>
            </div>
            <div className="chat-popup-message">
              <div className="chat-popup-bubble">
                <p>Inicie uma conversa com nossos especialistas!</p>
              </div>
              <a
                href="https://wa.me/5545999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20advocacia%20previdenciária."
                target="_blank"
                rel="noopener noreferrer"
                className="chat-popup-btn"
              >
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
