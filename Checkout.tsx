import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, AlertCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Checkout() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | "boleto">("pix");
  const [formData, setFormData] = useState({
    customerName: user?.name || "",
    customerEmail: user?.email || "",
    customerPhone: "",
    shippingAddress: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: cartItems = [] } = trpc.cart.getItems.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const { data: allProducts = [] } = trpc.products.list.useQuery();

  const createOrderMutation = trpc.orders.create.useMutation();
  const clearCartMutation = trpc.cart.clear.useMutation();

  const cartWithProducts = cartItems.map(item => ({
    ...item,
    product: allProducts.find(p => p.id === item.productId),
  }));

  const totalPrice = cartWithProducts.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const order = await createOrderMutation.mutateAsync({
        totalPrice,
        paymentMethod,
        ...formData,
      });

      await clearCartMutation.mutateAsync();

      alert(`Pedido criado com sucesso! ID: ${order}`);
      setLocation("/");
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      alert("Erro ao processar pedido. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

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
            <p className="text-slate-600 text-lg mb-6">Faça login para continuar</p>
          </div>
        </div>
      </div>
    );
  }

  if (cartWithProducts.length === 0) {
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
            <p className="text-slate-600 text-lg mb-6">Seu carrinho está vazio</p>
            <Link href="/catalog">
              <a>
                <Button className="bg-amber-700 hover:bg-amber-800">Explorar Produtos</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto px-4">
          <Link href="/cart">
            <a className="flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-4">
              <ChevronLeft className="w-5 h-5" />
              Voltar ao Carrinho
            </a>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900">Checkout</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Endereço de Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  name="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Rua, número, complemento, bairro, cidade, estado, CEP"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forma de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-slate-300 rounded-lg cursor-pointer hover:border-amber-700 transition" style={{ borderColor: paymentMethod === "pix" ? "#b45309" : undefined }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      checked={paymentMethod === "pix"}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Pix</p>
                      <p className="text-sm text-slate-600">Transferência instantânea</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-slate-300 rounded-lg cursor-pointer hover:border-amber-700 transition" style={{ borderColor: paymentMethod === "card" ? "#b45309" : undefined }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Cartão de Crédito</p>
                      <p className="text-sm text-slate-600">Parcelado em até 12x</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-slate-300 rounded-lg cursor-pointer hover:border-amber-700 transition" style={{ borderColor: paymentMethod === "boleto" ? "#b45309" : undefined }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="boleto"
                      checked={paymentMethod === "boleto"}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Boleto Bancário</p>
                      <p className="text-sm text-slate-600">Vencimento em 3 dias</p>
                    </div>
                  </label>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900">
                    Pagamento processado com segurança via Mercado Pago. Seus dados estão protegidos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cartWithProducts.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm text-slate-700">
                      <span>{item.product?.name} x{item.quantity}</span>
                      <span>R$ {(((item.product?.price || 0) * item.quantity) / 100).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-2">
                  <div className="flex justify-between text-slate-700">
                    <span>Subtotal</span>
                    <span>R$ {(totalPrice / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Frete</span>
                    <span className="text-green-600 font-semibold">Grátis</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total</span>
                    <span className="text-amber-700">R$ {(totalPrice / 100).toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3"
                >
                  {isProcessing ? "Processando..." : "Finalizar Compra"}
                </Button>

                <Link href="/cart">
                  <a>
                    <Button variant="outline" className="w-full">
                      Editar Carrinho
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
