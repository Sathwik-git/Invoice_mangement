"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableComponent from "./TableComponent";

const TabsSection = ({ invoiceData, productData, customerData }) => {
  const invoiceHeaders = [
    "SERIAL NUMBER",
    "CUSTOMER NAME",
    "PRODUCT NAME",
    "QTY",
    "TAX",
    "TOTAL AMOUNT",
    "DATE",
  ];
  const productHeaders = [
    "PRODUCT NAME",
    "CATEGORY",
    "UNIT PRICE",
    "TAX",
    "PRICE WITH TAX",
    "STOCK QUANTITY",
  ];
  const customerHeaders = [
    "CUSTOMER NAME",
    "PHONE NUMBER",
    "TOTAL PURCHASE AMOUNT",
  ];

  return (
    <Tabs defaultValue="invoices" className="space-y-4">
      <TabsList className="flex justify-center space-x-2 rounded-lg p-1">
        <TabsTrigger
          value="invoices"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Invoices
        </TabsTrigger>
        <TabsTrigger
          value="products"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Products
        </TabsTrigger>
        <TabsTrigger
          value="customers"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Customers
        </TabsTrigger>
      </TabsList>

      <TabsContent value="invoices">
        <Card>
          <CardHeader>
            <CardTitle>Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <TableComponent
              headers={invoiceHeaders}
              data={invoiceData}
              noDataMessage="No invoice data available"
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="products">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <TableComponent
              headers={productHeaders}
              data={productData}
              noDataMessage="No product data available"
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="customers">
        <Card>
          <CardHeader>
            <CardTitle>Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <TableComponent
              headers={customerHeaders}
              data={customerData}
              noDataMessage="No customer data available"
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;
