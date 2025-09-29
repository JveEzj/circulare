import { Leaf, Heart, Zap, Palette } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Conforto diário",
      description: "Leveza e maciez que acompanha você durante todo o dia, proporcionando bem-estar contínuo.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Saúde em movimento",
      description: "Melhora significativa da circulação sanguínea, reduzindo riscos e promovendo saúde vascular.",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Tecnologia inteligente",
      description: "Monitoramento integrado que acompanha sua circulação e fornece dados em tempo real.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design moderno",
      description: "Combina estilo e funcionalidade, permitindo usar em qualquer ocasião com elegância.",
      gradient: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Por que escolher a Circulare?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada benefício foi cuidadosamente desenvolvido para transformar sua experiência 
            de conforto e cuidado com a saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-soft hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-accent" />
              
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Additional value proposition */}
        <div className="mt-20 text-center">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium hover-lift">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
                Tecnologia que faz a diferença
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa tecnologia de monitoramento integrada permite acompanhar em tempo real 
                a sua circulação sanguínea, fornecendo dados valiosos para o cuidado preventivo 
                da sua saúde vascular.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Monitoramento contínuo</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Precisão dos sensores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">30 dias</div>
                  <div className="text-sm text-muted-foreground">Bateria de longa duração</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;