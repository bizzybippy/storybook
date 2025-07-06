// components/Button.tsx
import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export const Button = ({
  label,
  loading = false,
  disabled = false,
  size = "md",
  variant = "primary",
  onClick,
}: Props) => {
  const sizeClass = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-8 py-4 text-xl",
  }[size];

  const variantClass = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  }[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "rounded font-medium transition",
        sizeClass,
        variantClass,
        (disabled || loading) && "opacity-50 cursor-not-allowed"
      )}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};
