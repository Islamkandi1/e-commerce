import { CheckCircle,   ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Confirm Order",
  description: "Order confirmation page",
};
export default function OrderConfirmation() {


  return (
    <main className="min-h-screen pt-11 shadow-2xl flex items-center justify-center p-4">
      <section className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 transition-all duration-700  opacity-100 translate-y-0 `}>
        
        {/* Success Icon */}
        <section className="flex justify-center mb-6">
          <section className="relative">
            <section className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></section>
            <section className="relative bg-linear-to-br from-green-400 to-green-600 rounded-full p-4">
              <CheckCircle className="w-12 h-12 text-white" strokeWidth={3} />
            </section>
          </section>
        </section>

        {/* Title */}
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 text-lg">
            Thank you for your purchase
          </p>
        </section>




        {/* Action Buttons */}
        <section className="flex flex-col sm:flex-row gap-3">
          <Link
          href="/products" 
            className="flex-1 bg-black hover:bg-[#000000c4] cursor-pointer text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
          >
            Continue Shopping
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>


      </section>
    </main>
  );
}