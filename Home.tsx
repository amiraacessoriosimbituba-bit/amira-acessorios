import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart, Star, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const { data: products = [] } = trpc.products.list.useQuery();

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-bold text-amber-700 hover:text-amber-800 transition">
              {APP_LOGO && <img src={APP_LOGO} alt="Amira" className="h-8" />}
              <span className="hidden sm:inline">{APP_TITLE}</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/catalog">
              <a className="text-slate-700 hover:text-amber-700 font-medium transition">Catálogo</a>
            </Link>
            <Link href="/about">
              <a className="text-slate-700 hover:text-amber-700 font-medium transition">Sobre</a>
            </Link>
            <Link href="/contact">
              <a className="text-slate-700 hover:text-amber-700 font-medium transition">Contato</a>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link href="/cart">
                  <a className="relative p-2 hover:bg-slate-100 rounded-lg transition">
                    <ShoppingCart className="w-6 h-6 text-slate-700" />
                  </a>
                </Link>
                <Link href="/account">
                  <a className="text-slate-700 hover:text-amber-700 font-medium transition">{user?.name}</a>
                </Link>
              </>
            ) : (
              <Button
                onClick={() => window.location.href = getLoginUrl()}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Entrar
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight tracking-tight">
              Elegância Pura
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light">
              Bijuterias que expressam quem você é.
            </p>
            <Link href="/catalog">
              <a>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold">
                  Explorar <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Destaques da Coleção</h2>
            <p className="text-slate-600 text-lg">Bijuterias elegantes e sofisticadas para todos os momentos</p>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <a className="group">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <div className="relative bg-slate-100 h-64 overflow-hidden">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-slate-100">
                            <Heart className="w-12 h-12 text-amber-400 opacity-50" />
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {product.category || "Bijuteria"}
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-slate-900">{product.name}</CardTitle>
                        {product.description && (
                          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-amber-700">
                            R$ {(product.price / 100).toFixed(2)}
                          </span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">Nenhum produto disponível no momento</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/catalog">
              <a>
                <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  Ver Todos os Produtos <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-tight">Sobre Nos</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6 font-light">
              Bijuterias cuidadosamente selecionadas para expressar sua personalidade e estilo.
            </p>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              Cada peca e escolhida com dedicacao a qualidade e elegancia.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">O que Dizem Sobre Nós</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria Silva",
                text: "Adorei a qualidade dos acessórios! Chegou rápido e bem embalado.",
                rating: 5,
              },
              {
                name: "Ana Costa",
                text: "Perfeito! Exatamente como esperava. Recomendo muito!",
                rating: 5,
              },
              {
                name: "Juliana Santos",
                text: "Lindos acessórios, preços acessíveis e atendimento excelente.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-amber-200">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Descubra a Colecao</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-light">
            Bijuterias cuidadosamente selecionadas para expressao e estilo.
          </p>
          <Link href="/catalog">
            <a>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold">
                Ver Produtos
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Amira Acessórios</h3>
              <p className="text-slate-400">Bijuterias e folheados que inspiram beleza e estilo.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/catalog"><a className="hover:text-white transition">Catálogo</a></Link></li>
                <li><Link href="/about"><a className="hover:text-white transition">Sobre</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white transition">Contato</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-slate-400">Email: contato@amiraacessorios.com</p>
              <p className="text-slate-400">WhatsApp: (11) 99999-9999</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Amira Acessórios. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
