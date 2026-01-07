import { Truck, Leaf, Sparkles, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    icon: Leaf,
    title: "Clean Beauty",
    description: "Natural ingredients only",
  },
  {
    icon: Sparkles,
    title: "Cruelty Free",
    description: "Never tested on animals",
  },
  {
    icon: HeartHandshake,
    title: "Easy Returns",
    description: "30-day money back",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border/50 bg-gradient-soft">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-4">
                <feature.icon className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-medium mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
