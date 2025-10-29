import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, ChevronLeft, Filter } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Catalog() {
  const { isAuthenticated } = useAuth();
  const { data: products = [] } = trpc.products.list.useQuery();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "newest">("newest");

  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean)));

  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

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
          <h1 className="text-4xl font-bold text-slate-900">Catálogo Completo</h1>
          <p className="text-slate-600 mt-2">Explore nossa coleção de bijuterias e folheados</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-amber-700" />
                <h3 className="text-lg font-bold text-slate-900">Filtros</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Categoria</h4>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded mb-2 transition ${
                    selectedCategory === null
                      ? "bg-amber-700 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Todas
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded mb-2 transition ${
                      selectedCategory === cat
                        ? "bg-amber-700 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort Filter */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Ordenar</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                >
                  <option value="newest">Mais Recentes</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
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
                        {product.stock === 0 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Fora de Estoque</span>
                          </div>
                        )}
                      </div>
                      <CardHeader className="pb-3 flex-grow">
                        <CardTitle className="text-lg text-slate-900">{product.name}</CardTitle>
                        {product.description && (
                          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-4">
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
                        <div className="flex gap-2">
                          <Link href={`/product/${product.id}`}>
                            <a className="flex-1">
                              <Button variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                                Ver Detalhes
                              </Button>
                            </a>
                          </Link>
                          {isAuthenticated && product.stock > 0 && (
                            <Button
                              className="flex-1 bg-amber-700 hover:bg-amber-800"
                              onClick={() => {
                                // Add to cart will be implemented
                              }}
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-slate-600 text-lg">Nenhum produto encontrado</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
