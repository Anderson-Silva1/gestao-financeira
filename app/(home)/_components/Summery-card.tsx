import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";

import { ReactNode } from "react";

interface SummeryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SummeryCard = async ({
  icon,
  title,
  amount,
  size = "small",
}: SummeryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent
        className={`${size === "large" ? "flex flex-col justify-between gap-10 sm:flex-row" : "flex justify-between"}`}
      >
        <p
          className={`${size === "small" ? "text-2xl" : "text-xl sm:text-4xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummeryCard;
