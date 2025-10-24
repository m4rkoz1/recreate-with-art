import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import giannoneLogo from "@/assets/giannone-logo.png";

const ConstructionPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={giannoneLogo} 
            alt="Giannone Foods Logo" 
            className="h-20 md:h-24 w-auto"
          />
        </div>

        {/* Construction Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="construction-icon">🏗️</div>
          <div className="construction-icon">🔨</div>
          <div className="construction-icon">⚙️</div>
        </div>

        {/* Main Heading */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            Site em <span className="text-italian-green">Construção</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Under <span className="text-italian-red">Construction</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 italian-flag-divider mx-auto rounded-full"></div>

        {/* Description */}
        <div className="space-y-4">
          <p className="company-description text-lg">
            Especializados na <strong>importação e distribuição</strong> de produtos de alta 
            qualidade. Em breve, nosso site estará pronto com nosso catálogo 
            completo de produtos.
          </p>
          <p className="company-description text-lg">
            Specialized in <strong>importing and distributing</strong> high-quality products. Soon, our 
            website will be ready with our complete product catalog.
          </p>
        </div>

        {/* Coming Soon Button */}
        <Button 
          variant="outline" 
          className="bg-muted hover:bg-accent text-foreground border-border corporate-shadow px-8 py-3 text-lg"
          disabled
        >
          🚧 Em Breve • Coming Soon 🚧
        </Button>

        {/* Contact Card */}
        <Card className="p-6 corporate-shadow bg-card">
          <h3 className="text-xl font-semibold mb-2">
            Entre em Contato • Get in Touch
          </h3>
          <a 
            href="mailto:contato@giannonefoods.com.br" 
            className="text-italian-green hover:text-primary/80 font-medium transition-colors"
          >
            contato@giannonefoods.com.br
          </a>
        </Card>

        {/* Footer */}
        <p className="text-sm text-muted-foreground mt-12">
          © 2024 Giannone Foods. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default ConstructionPage;