import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, ChevronLeft, Minus, Plus } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const { isAuthenticated } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const productId = params?.id ? parseInt(params.id) : 0;

  const { data: product, isLoading } = trpc.products.getById.useQuery(
    { id: productId },
    { enabled: productId > 0 }
  );

  const addToCartMutation = trpc.cart.addItem.useMutation();

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      alert("Faça login para adicionar itens ao carrinho");
      return;
    }
    if (!product) return;

    try {
      await addToCartMutation.mutateAsync({
        productId: product.id,
        quantity,
      });
      alert("Produto adicionado ao carrinho!");
      setQuantity(1);
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      alert("Erro ao adicionar ao carrinho");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
          <p className="mt-4 text-slate-600">Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-12">
          <Link href="/catalog">
            <a className="flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
              <ChevronLeft className="w-5 h-5" />
              Voltar ao Catálogo
            </a>
          </Link>
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">Produto não encontrado</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4">
          <Link href="/catalog">
            <a className="flex items-center gap-2 text-amber-700 hover:text-amber-800">
              <ChevronLeft className="w-5 h-5" />
              Voltar ao Catálogo
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-amber-100 to-slate-100">
                  <Heart className="w-24 h-24 text-amber-400 opacity-50" />
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-700 font-semibold">{product.category || "Bijuteria"}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
            </div>

            {product.description && (
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Descrição</h3>
                <p className="text-slate-700 text-lg leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Price */}
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-slate-600 mb-2">Preço</p>
              <p className="text-4xl font-bold text-amber-700">
                R$ {(product.price / 100).toFixed(2)}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 font-semibold">
                    {product.stock} em estoque
                  </span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-700 font-semibold">Fora de estoque</span>
                </>
              )}
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <p className="font-semibold text-slate-900 mb-4">Quantidade</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-slate-100 rounded-lg transition"
                  >
                    <Minus className="w-5 h-5 text-slate-700" />
                  </button>
                  <span className="text-2xl font-bold text-slate-900 w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-slate-100 rounded-lg transition"
                  >
                    <Plus className="w-5 h-5 text-slate-700" />
                  </button>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            {product.stock > 0 ? (
              <Button
                onClick={handleAddToCart}
                disabled={addToCartMutation.isPending}
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 text-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-6 h-6" />
                {addToCartMutation.isPending ? "Adicionando..." : "Adicionar ao Carrinho"}
              </Button>
            ) : (
              <Button disabled className="w-full py-3 text-lg">
                Produto Indisponível
              </Button>
            )}

            {/* Additional Info */}
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="font-semibold text-slate-900 mb-3">Informações Importantes</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Frete rápido e seguro</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Múltiplas formas de pagamento (Pix, Cartão, Boleto)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Garantia de satisfação</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Atendimento via WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
