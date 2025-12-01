import { useState, useEffect } from 'react'
import './App.css'
import advogadaImg from './assets/advogada.png'
import justicaImg from './assets/justica.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedBeneficio, setSelectedBeneficio] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
                <span className="logo-text">Alessandra Ferrari</span>
                <span className="logo-subtitle">Advogados Associados</span>
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
          <img src="https://images.unsplash.com/photo-1625426078245-6911839409dd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhc2lsaWF8ZW58MHx8MHx8fDA%3D" alt="Praça dos Três Poderes - Brasília" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Devotos à Justiça</h1>
          <p className="hero-subtitle">Excelência e compromisso com resultados</p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section-sobre">
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-content">
              <h2 className="section-title sobre-title">Sobre a Advogada</h2>
              <div className="sobre-divider"></div>
              <p className="sobre-text">
                O escritório Alessandra Ferrari Advocacia atua com dedicação exclusiva ao Direito Previdenciário. Nosso trabalho é oferecer um atendimento humanizado, análise minuciosa do caso e orientação completa em todas as etapas do processo.
              </p>
              <p className="sobre-text">
                Acompanhamos desde o primeiro atendimento até o resultado final, garantindo que cada cliente receba o benefício que realmente tem direito — com segurança jurídica, transparência e agilidade.
              </p>
            </div>
            <div className="sobre-image">
              <img src={advogadaImg} alt="Alessandra Ferrari" className="sobre-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Espaçamento */}
      <div className="spacing-section"></div>

      {/* Benefícios */}
      <section id="beneficios" className="section-beneficios">
        <div className="container beneficios-container">
          <h2 className="section-title centered beneficios-title">Benefícios Atendidos</h2>
          <div className="beneficios-layout">
            <div className="beneficios-image">
              <img
                src="https://img1.migalhas.uol.com.br/gf_base/empresas/MIGA/imagens/16B4121113CFFE91FBF7F0997361461AE890_advogada.jpg"
                alt="Advogada Previdenciária"
                className="beneficios-img"
              />
            </div>
            <div className="beneficios-grid">
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
        </div>
      </section>

      {/* Imagem Divisória */}
      <section className="section-divider-image">
        <img
          src={justicaImg}
          alt="Lady Justice - Símbolo da Justiça"
          className="divider-img"
        />
      </section>

      {/* Quem Somos */}
      <section id="areas" className="section-areas">
        <div className="container">
          <div className="quem-somos-layout">
            <div className="quem-somos-text">
              <h2 className="section-title quem-somos-title">Quem Somos</h2>
              <div className="quem-somos-divider"></div>
              <p className="quem-somos-intro">Localizado em Cascavel/PR, o escritório atua há anos prestando assessoria jurídica exclusiva na área previdenciária. Atendemos clientes de toda a região, acompanhando todas as fases do processo:</p>
              <p className="quem-somos-footer">Trabalhamos com foco em oferecer ao cliente informações claras, segurança jurídica e resultados consistentes.</p>
            </div>

            <div className="servicos-grid">
              <div className="servico-card">
                <div className="servico-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3>Análise Documental</h3>
              </div>

              <div className="servico-card">
                <div className="servico-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                </div>
                <h3>Protocolos Administrativos</h3>
              </div>

              <div className="servico-card">
                <div className="servico-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3>Perícias Médicas</h3>
              </div>

              <div className="servico-card">
                <div className="servico-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <h3>Recursos Internos</h3>
              </div>

              <div className="servico-card">
                <div className="servico-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg>
                </div>
                <h3>Ações Judiciais contra o INSS</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atendimento Humanizado */}
      <section id="areas-old" className="section-areas-old">
        <div className="container">
          <div className="atendimento-layout">
            <div className="atendimento-image">
              <img
                src="https://b2midia.com.br/wp-content/uploads/2019/12/atendimento-humanizado.jpg"
                alt="Atendimento Humanizado"
                className="atendimento-img"
              />
              <div className="atendimento-badge">
                <div className="badge-number">100%</div>
                <div className="badge-text">Eficiência</div>
              </div>
            </div>
            <div className="atendimento-content">
              <h2 className="section-title atendimento-title">Atendimento Humanizado</h2>
              <div className="atendimento-divider"></div>
              <p>Nossa missão é oferecer um atendimento acolhedor, transparente e responsável.</p>
              <p>Sabemos que dúvidas sobre aposentadoria ou benefícios do INSS podem gerar insegurança. Por isso, cada cliente é orientado de forma individualizada, com empatia e compromisso.</p>
              <p><strong>Cada caso importa, e cada cliente é atendido com total atenção.</strong></p>
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
                  <li>negativa indevida de benefícios;</li>
                  <li>concessão com valor menor do que o devido;</li>
                  <li>problemas para comprovar tempo de serviço;</li>
                  <li>perda de direitos por falta de documentos ou prazos;</li>
                  <li>dificuldades em perícias médicas.</li>
                </ul>
              </div>

              <div className="porque-col">
                <h3>Com um Advogado Especializado</h3>
                <ul className="porque-list solucoes">
                  <li>análise completa do seu histórico de contribuições;</li>
                  <li>preparação correta de documentos e provas;</li>
                  <li>acompanhamento em perícias;</li>
                  <li>recursos administrativos fundamentados;</li>
                  <li>ajuizamento de ação quando necessário;</li>
                  <li>muito mais segurança e chances reais de aprovação.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Especializada */}
      <section className="section-equipe-nova">
        <div className="container">
          <h2 className="section-title centered equipe-nova-title">Equipe Especializada</h2>
          <div className="equipe-nova-divider"></div>
          <div className="equipe-nova-content">
            <p className="equipe-nova-text">
              Nossa equipe é formada por profissionais comprometidos, em constante atualização sobre as normas previdenciárias, decisões recentes e alterações legais.
            </p>
            <p className="equipe-nova-text">
              Prezamos por comunicação clara, rapidez no atendimento e acompanhamento integral do cliente.
            </p>
            <a href="#" className="equipe-cta">
              Conheça mais sobre nosso escritório
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
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
          <div className="contato-items">
            <div className="contato-item">
              <div className="contato-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Endereço</h4>
                <p>Rua São Paulo, 707, Sl. 101<br/>Edifício Mariga, Centro<br/>Cascavel/PR</p>
              </div>
            </div>
            <div className="contato-item">
              <div className="contato-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4>E-mail</h4>
                <p>contato@advalessandraferrari.com.br<br/>advalessandraferrari@gmail.com</p>
              </div>
            </div>
            <div className="contato-item">
              <div className="contato-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4>Telefone</h4>
                <p>(45) 3306-8111 / (45) 3306-8112<br/>(45) 9 9900-6007 (WhatsApp)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">Alessandra Ferrari</span>
              <span className="logo-subtitle">Advogados Associados</span>
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
    </div>
  )
}

export default App
