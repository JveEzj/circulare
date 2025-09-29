import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroSocksSrc from "@/assets/hero-socks.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-16">
      <div className="relative min-h-screen flex items-center">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroSocksSrc})` }}
        />

        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                <span className="block">Circulare</span>
                <span className="block text-gradient">Conforto que protege</span>
                <span className="block">cada quilômetro da sua jornada</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0">
                Transforme sua caminhada com nossas meias ortopédicas inteligentes. 
                Tecnologia avançada, design moderno e o máximo em conforto para seus pés.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection("#sobre")}
                  className="group"
                >
                  Saiba Mais
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => scrollToSection("#produtos")}
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Ver Produtos
                </Button>
              </div>
            </div>

            {/* Right Content - Product Image */}
            <div className="relative flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <img
                  src={heroSocksSrc}
                  alt="Meias Ortopédicas Circulare"
                  className="w-full max-w-lg h-auto rounded-2xl shadow-strong hover-glow"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-pulse-glow">
                  Tecnologia Inteligente
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-primary-foreground text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                  Conforto Garantido
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;