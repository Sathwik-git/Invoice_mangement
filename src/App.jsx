"use client";

import { useSelector } from "react-redux";
import FileUploader from "./components/FileUploader";
import TabsSection from "./components/TabsSection";

export default function App() {
  const invoiceData = useSelector((state) => state.invoices);
  const productData = useSelector((state) => state.products);
  const customerData = useSelector((state) => state.customers);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Swipe Invoice Management
          </h1>
          <p className="text-xl text-gray-600">
            Streamline your invoicing process
          </p>
        </div>

        <FileUploader />

        <TabsSection
          invoiceData={invoiceData}
          productData={productData}
          customerData={customerData}
        />
      </div>
    </div>
  );
}
