"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCustomers } from "../redux/slices/customerSlice";
import { setProducts } from "../redux/slices/productSlice";
import { setInvoices } from "../redux/slices/invoicesSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Loader2 } from "lucide-react";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://swipe-assignment-backend-nv3o.onrender.com/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const { invoices, products, customers } = await response.json();

      dispatch(setInvoices(invoices));
      dispatch(setProducts(products));
      dispatch(setCustomers(customers));

      setFile(null);
      document.getElementById("file-input").value = "";
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader>
        <CardTitle>Upload Document</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Input
            id="file-input"
            type="file"
            className="flex-grow cursor-pointer"
            onChange={handleFileChange}
            disabled={isLoading}
          />
          <Button
            className="whitespace-nowrap"
            onClick={handleUpload}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload and Extract
              </>
            )}
          </Button>
        </div>
        {file && (
          <p className="mt-2 text-sm text-gray-600">
            Selected file: {file.name}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default FileUploader;
