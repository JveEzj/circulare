import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Shield, Zap, Star } from "lucide-react";
import productSocksSrc from "@/assets/product-socks.jpg";

const ProductSection = () => {
  const specifications = [
    {
      icon: Activity,
      title: "Material Inteligente",
      description: "Microfibra respirável com compressão graduada para máximo conforto"
    },
    {
      icon: Zap,
      title: "Sensor Integrado",
      description: "Monitoramento de circulação sanguínea em tempo real"
    },
    {
      icon: Shield,
      title: "Proteção Avançada",
      description: "Reduz inchaço, melhora circulação e previne varizes"
    }
  ];

  const benefits = [
    "Reduz inchaço e fadiga",
    "Melhora a circulação sanguínea",
    "Previne varizes e coágulos",
    "Proporciona conforto durante todo o dia",
    "Tecnologia de monitoramento integrada",
    "Material respirável e antibacteriano"
  ];

  return (
    <section id="produtos" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Meia Ortopédica Circulare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O futuro do cuidado com os pés chegou. Descubra a revolução em conforto e tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-soft rounded-3xl p-8 shadow-medium">
              <img
                src={productSocksSrc}
                alt="Meia Ortopédica Circulare"
                className="w-full h-auto rounded-2xl hover-glow transition-all duration-300"
              />
              
              {/* Product badges */}
              <div className="absolute top-4 left-4 space-y-2">
                <Badge className="bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
                <Badge className="bg-primary text-primary-foreground">
                  Tecnologia Inteligente
                </Badge>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Especificações Técnicas
              </h3>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <spec.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {spec.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-soft hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Principais Benefícios
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg"
                className="flex-1"
                onClick={() => {
                  const element = document.querySelector("#contato");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#beneficios");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Benefícios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;