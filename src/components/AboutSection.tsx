import { Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Cuidado com a Saúde",
      description: "Desenvolvemos produtos pensando no seu bem-estar e qualidade de vida."
    },
    {
      icon: Target,
      title: "Precisão Tecnológica",
      description: "Cada detalhe é pensado para oferecer máxima eficiência e conforto."
    },
    {
      icon: Users,
      title: "Para Todos",
      description: "Nossos produtos atendem diferentes necessidades e estilos de vida."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Sobre a Circulare
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A Circulare nasceu para transformar a forma como você cuida da sua saúde e conforto. 
              Nossas meias ortopédicas combinam tecnologia, estilo e bem-estar para acompanhar 
              cada passo da sua jornada.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Com foco na inovação e qualidade, desenvolvemos produtos que não apenas cuidam 
              dos seus pés, mas também monitoram sua saúde de forma inteligente e discreta.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10K+", label: "Clientes Satisfeitos" },
            { number: "98%", label: "Taxa de Satisfação" },
            { number: "5 Anos", label: "De Pesquisa" },
            { number: "24/7", label: "Monitoramento" }
          ].map((stat, index) => (
            <div key={index} className="animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;