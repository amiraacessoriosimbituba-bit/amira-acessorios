import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Shield, ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-4">
              <ChevronLeft className="w-5 h-5" />
              Voltar
            </a>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900">Sobre a Amira Acessórios</h1>
          <p className="text-slate-600 mt-2">Conheça nossa história e missão</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              A Amira Acessórios nasceu com a missão de valorizar a beleza real através de bijuterias e folheados cuidadosamente escolhidos. Cada peça que selecionamos reflete elegância, estilo e autoestima — tudo com a praticidade de comprar online com segurança.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Acreditamos que os acessórios têm o poder de transformar e marcar momentos especiais, além de aumentar a autoestima das pessoas. Por isso, cada bijuteria em nossa coleção é escolhida com cuidado e qualidade, garantindo que você receba produtos que realmente fazem a diferença.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Nosso compromisso é oferecer acessórios de qualidade com preços acessíveis, permitindo que todas as mulheres possam brilhar e se sentir confiantes em qualquer ocasião.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-amber-200">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <CardTitle>Autoestima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Acreditamos que cada mulher merece se sentir bonita, confiante e poderosa. Nossos acessórios são escolhidos para elevar sua autoestima.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <CardTitle>Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Cada peça é selecionada com cuidado, garantindo qualidade, durabilidade e beleza. Você merece o melhor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <CardTitle>Confiança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Compre com segurança. Oferecemos múltiplas formas de pagamento e garantia de satisfação em cada compra.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Por Que Escolher a Amira Acessórios?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-amber-700 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Variedade Completa</h3>
                  <p className="text-slate-600">Brincos, colares, pulseiras, anéis e muito mais. Temos para todos os estilos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-amber-700 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Preços Acessíveis</h3>
                  <p className="text-slate-600">Qualidade premium com preços que cabem no seu orçamento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-amber-700 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Entrega Rápida</h3>
                  <p className="text-slate-600">Receba seus acessórios rapidamente e bem embalados.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-amber-700 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Múltiplas Formas de Pagamento</h3>
                  <p className="text-slate-600">Pix, cartão de crédito, boleto. Escolha a forma que melhor se adequa a você.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-amber-700 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Atendimento Personalizado</h3>
                  <p className="text-slate-600">Dúvidas? Estamos aqui para ajudar via WhatsApp ou email.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-amber-700 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Garantia de Satisfação</h3>
                  <p className="text-slate-600">Se não gostar, temos políticas flexíveis de devolução.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pronta para Explorar Nossa Coleção?</h2>
          <p className="text-slate-600 mb-6">Descubra bijuterias e folheados que vão transformar seu estilo.</p>
          <Link href="/catalog">
            <a>
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6">
                Ver Catálogo
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
