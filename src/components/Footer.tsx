import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import circulareLogoSrc from "@/assets/circulare-logo.png";

const Footer = () => {
  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Produtos", href: "#produtos" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Phone, text: "(11) 9999-9999" },
    { icon: Mail, text: "contato@circulare.com" },
    { icon: MapPin, text: "São Paulo, SP - Brasil" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={circulareLogoSrc} 
                alt="Circulare Logo" 
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="text-xl font-bold">Circulare</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando o cuidado com a saúde através de meias ortopédicas inteligentes. 
              Conforto, tecnologia e bem-estar em cada passo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <info.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">
              Receba novidades e dicas de saúde diretamente no seu e-mail.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-2 px-4 rounded-lg transition-colors">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Circulare – Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;