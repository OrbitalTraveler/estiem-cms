import React from "react";
import { CircleCheck } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

function FormSuccess({ message = "" }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div className="p-3 rounded-md flex items-center gap-x-2 text-sm text-primary-800">
      <CircleCheck className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormSuccess;
