import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Enfermeira",
      rating: 5,
      comment: "Trabalho 12 horas em pé e as meias Circulare transformaram minha rotina. Não sinto mais aquele cansaço e inchaço no final do dia. A tecnologia de monitoramento me dá tranquilidade sobre minha saúde vascular.",
      avatar: "MS"
    },
    {
      name: "Carlos Santos",
      role: "Executivo",
      rating: 5,
      comment: "Como alguém que viaja muito a trabalho, estava sempre preocupado com a circulação durante voos longos. As meias Circulare me deram a segurança que eu precisava, e o design discreto permite usar em qualquer ocasião.",
      avatar: "CS"
    },
    {
      name: "Ana Costa",
      role: "Professora",
      rating: 5,
      comment: "Tenho histórico de varizes na família e sempre me preocupei com isso. Desde que comecei a usar as meias Circulare, sinto muito mais conforto e segurança. O aplicativo que monitora minha circulação é fantástico!",
      avatar: "AC"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram seu bem-estar com a Circulare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden shadow-soft hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-accent/20">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold">4.9/5 estrelas</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div>
              <span className="font-semibold">10.000+ clientes satisfeitos</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div>
              <span className="font-semibold">98% recomendam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;