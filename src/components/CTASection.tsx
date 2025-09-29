import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-16 text-center shadow-strong">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground rounded-full" />
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent-foreground rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-foreground rounded-full" />
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-accent-foreground rounded-full" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Experimente a Circulare e sinta a diferença 
              <span className="block text-accent-foreground">em cada passo</span>
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Não espere mais para cuidar da sua saúde. Junte-se a milhares de pessoas 
              que já transformaram seu bem-estar com nossas meias ortopédicas inteligentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToContact}
                className="group bg-accent-foreground text-accent hover:bg-accent-foreground/90 hover:scale-105"
              >
                Entre em Contato
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center space-x-4 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(11) 9999-9999</span>
                </div>
                <div className="w-px h-4 bg-primary-foreground/30" />
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">contato@circulare.com</span>
                </div>
              </div>
            </div>

            {/* Benefits highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { title: "Entrega Rápida", description: "Em até 3 dias úteis" },
                { title: "Garantia Total", description: "30 dias para testar" },
                { title: "Suporte 24h", description: "Atendimento especializado" }
              ].map((item, index) => (
                <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
                  <h3 className="font-semibold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;