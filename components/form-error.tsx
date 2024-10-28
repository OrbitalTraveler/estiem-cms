import React from "react";
import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

function FormError({ message = "" }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <TriangleAlert className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormError;
