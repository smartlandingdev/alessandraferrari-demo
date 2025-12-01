import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              <h2 className="section-title">Excelência em Advocacia</h2>
              <p className="sobre-text">
                Somos um escritório de advocacia que atua em toda a região Oeste do Paraná. Somos especialistas em Direito Previdenciário. Atuamos também nos ramos Trabalhista, Cível, Família, Direito do Consumidor, entre outros.
              </p>
              <p className="sobre-text">
                Atuamos como Correspondentes e realizamos serviço de diligências para cargas e fotocópias de processos administrativos e laudos periciais junto ao INSS-Cascavel.
              </p>
            </div>
            <div className="sobre-image">
              {/* Ícones orbitais */}
              <div className="deco-icon deco-icon-1">
                <img src="/src/assets/icons/balance.png" alt="Balança" />
              </div>
              <div className="deco-icon deco-icon-2">
                <img src="/src/assets/icons/law-book.png" alt="Livro" />
              </div>
              <div className="deco-icon deco-icon-3">
                <img src="/src/assets/icons/auction.png" alt="Martelo" />
              </div>
              <div className="deco-icon deco-icon-4">
                <img src="/src/assets/icons/police-order.png" alt="Ordem" />
              </div>
              <div className="deco-icon deco-icon-5">
                <img src="/src/assets/icons/balance.png" alt="Balança" />
              </div>
              <div className="deco-icon deco-icon-6">
                <img src="/src/assets/icons/auction.png" alt="Martelo" />
              </div>

              <img src="/src/assets/advogada.png" alt="Alessandra Ferrari" className="sobre-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="section-equipe">
        <div className="container">
          <h2 className="section-title centered">Nossa Equipe</h2>
          <div className="equipe-content">
            <p className="equipe-text">
              Dispomos de equipe qualificada, atenta à legislação vigente que de maneira personalizada, atende a expectativa dos nossos clientes.
            </p>
            <div className="equipe-destaque">
              <h3 className="equipe-destaque-title">ATENÇÃO:</h3>
              <p className="equipe-destaque-text">
                TRABALHAMOS COMO ADVOGADOS CORRESPONDENTES EM TODA A REGIÃO<br/>
                (Advogados cadastrados no Portal www.juriscorrespondente.com.br)
              </p>
            </div>
            <p className="equipe-text">
              Disponibilizamos-nos para diligências para cargas e fotocópias junto ao INSS-Cascavel.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="section-areas">
        <div className="container">
          <h2 className="section-title centered">Áreas de Atuação</h2>
          <p className="section-subtitle">Expertise especializada para atender suas necessidades jurídicas</p>

          <div className="areas-grid">
            <div className="area-card">
              <h3>Direito Previdenciário</h3>
              <p>Aposentadorias (idade, tempo de contribuição, invalidez, especial), auxílio-doença, auxílio-acidente, pensão por morte, revisões, desaposentação, cálculos e simulações.</p>
            </div>
            <div className="area-card">
              <h3>Direito Civil e Consumidor</h3>
              <p>Ação de cobrança, execução de títulos, obrigação de fazer, inventário e arrolamento, mandado de segurança, reparação de danos, revisão de contratos, tutela e curatela.</p>
            </div>
            <div className="area-card">
              <h3>Direito de Família</h3>
              <p>Separação e divórcio, união estável, partilha de bens, pensão alimentícia, guarda e visitas, investigação de paternidade, interdição judicial, adoção, pactos nupciais.</p>
            </div>
            <div className="area-card">
              <h3>Direito Trabalhista</h3>
              <p><strong>Defesa do Empregado:</strong> Reclamatória trabalhista, acidente de trabalho, reparação de danos.<br/><br/><strong>Defesa do Empregador:</strong> Defesa judicial, consultoria junto ao Ministério do Trabalho, sindicatos e MPT.</p>
            </div>
            <div className="area-card">
              <h3>Diligências Extrajudiciais</h3>
              <p>Cargas e fotocópias junto ao INSS-Cascavel, Fórum Estadual, Federal e Trabalhista.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="section-localizacao">
        <div className="container">
          <h2 className="section-title centered">Localização</h2>
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
          <h2 className="section-title centered">Precisa de Assessoria Jurídica?</h2>
          <p className="contato-description centered">
            Estamos à disposição para atender você. Entre em contato através dos canais abaixo
            ou agende uma reunião em nosso escritório.
          </p>

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
    </div>
  )
}

export default App
