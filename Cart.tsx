import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, ChevronLeft, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { useState, useEffect } from "react";

interface CartItemWithProduct {
  id: number;
  productId: number;
  quantity: number;
  product?: {
    id: number;
    name: string;
    price: number;
    imageUrl?: string | null;
  };
}

export default function Cart() {
  const { isAuthenticated } = useAuth();
  const { data: cartItems = [] } = trpc.cart.getItems.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const { data: allProducts = [] } = trpc.products.list.useQuery();

  const removeFromCartMutation = trpc.cart.removeItem.useMutation();
  const updateCartMutation = trpc.cart.updateItem.useMutation();
  const clearCartMutation = trpc.cart.clear.useMutation();

  const [cartWithProducts, setCartWithProducts] = useState<CartItemWithProduct[]>([]);

  useEffect(() => {
    const enrichedCart = cartItems.map(item => ({
      ...item,
      product: allProducts.find(p => p.id === item.productId),
    }));
    setCartWithProducts(enrichedCart);
  }, [cartItems, allProducts]);

  const handleRemove = async (cartItemId: number) => {
    try {
      await removeFromCartMutation.mutateAsync({ cartItemId });
    } catch (error) {
      console.error("Erro ao remover item:", error);
    }
  };

  const handleUpdateQuantity = async (cartItemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      await updateCartMutation.mutateAsync({ cartItemId, quantity: newQuantity });
    } catch (error) {
      console.error("Erro ao atualizar quantidade:", error);
    }
  };

  const handleClearCart = async () => {
    if (window.confirm("Tem certeza que deseja limpar o carrinho?")) {
      try {
        await clearCartMutation.mutateAsync();
      } catch (error) {
        console.error("Erro ao limpar carrinho:", error);
      }
    }
  };

  const totalPrice = cartWithProducts.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-12">
          <Link href="/">
            <a className="flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8">
              <ChevronLeft className="w-5 h-5" />
              Voltar
            </a>
          </Link>
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 text-lg mb-6">Faça login para ver seu carrinho</p>
            <Link href="/">
              <a>
                <Button className="bg-amber-700 hover:bg-amber-800">Ir para Home</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
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
          <h1 className="text-4xl font-bold text-slate-900">Carrinho de Compras</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {cartWithProducts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartWithProducts.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-24 h-24 bg-slate-100 rounded-lg overflow-hidden">
                        {item.product?.imageUrl ? (
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-slate-100">
                            <ShoppingCart className="w-6 h-6 text-amber-400 opacity-50" />
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow">
                        <h3 className="font-semibold text-slate-900 text-lg">
                          {item.product?.name || "Produto"}
                        </h3>
                        <p className="text-amber-700 font-bold text-lg mt-2">
                          R$ {((item.product?.price || 0) / 100).toFixed(2)}
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 border border-slate-300 rounded hover:bg-slate-100"
                          >
                            −
                          </button>
                          <span className="font-semibold text-slate-900 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 border border-slate-300 rounded hover:bg-slate-100"
                          >
                            +
                          </button>
                          <span className="text-slate-600 ml-4">
                            Subtotal: R$ {(((item.product?.price || 0) * item.quantity) / 100).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="outline"
                onClick={handleClearCart}
                className="w-full border-red-300 text-red-600 hover:bg-red-50"
              >
                Limpar Carrinho
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-700">
                      <span>Subtotal ({cartWithProducts.length} itens)</span>
                      <span>R$ {(totalPrice / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>Frete</span>
                      <span>A calcular</span>
                    </div>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between text-lg font-bold text-slate-900">
                      <span>Total</span>
                      <span className="text-amber-700">R$ {(totalPrice / 100).toFixed(2)}</span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <a>
                      <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3">
                        Ir para Checkout
                      </Button>
                    </a>
                  </Link>

                  <Link href="/catalog">
                    <a>
                      <Button variant="outline" className="w-full">
                        Continuar Comprando
                      </Button>
                    </a>
                  </Link>

                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 text-sm text-amber-900">
                    <p className="font-semibold mb-2">✓ Frete Grátis</p>
                    <p>Para compras acima de R$ 100</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 text-lg mb-6">Seu carrinho está vazio</p>
            <Link href="/catalog">
              <a>
                <Button className="bg-amber-700 hover:bg-amber-800">
                  Explorar Produtos
                </Button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
