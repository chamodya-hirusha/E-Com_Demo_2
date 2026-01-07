import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-hero py-20 md:py-32">
          <div className="container text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Born from a passion for clean beauty and a commitment to sustainability,
              Bloom is redefining what it means to look and feel beautiful.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Beauty Without Compromise
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Bloom, we believe that beauty should never come at the expense of your health
                or the planet. That's why we've dedicated ourselves to creating products that
                are as effective as they are ethical. Every formula is crafted with the finest
                natural ingredients, rigorously tested for efficacy, and packaged with
                sustainability in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Clean Ingredients",
                  description:
                    "We use only natural, non-toxic ingredients that are good for your skin and the environment.",
                },
                {
                  icon: Heart,
                  title: "Cruelty Free",
                  description:
                    "We never test on animals. All our products are certified cruelty-free and vegan-friendly.",
                },
                {
                  icon: Sparkles,
                  title: "Sustainable",
                  description:
                    "From recyclable packaging to carbon-neutral shipping, we minimize our environmental footprint.",
                },
                {
                  icon: Award,
                  title: "Effective",
                  description:
                    "Our formulas are developed by experts and proven to deliver real, visible results.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-4">
                    <value.icon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Ready to Bloom?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Discover our collection of clean, effective beauty products and start
              your journey to radiant skin.
            </p>
            <Button variant="hero" size="xl">
              Shop Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
