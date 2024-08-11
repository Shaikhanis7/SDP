import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { IconType } from "react-icons";

// Define the props interface for the CardWithForm component
interface CardWithFormProps {
  Icon: IconType;  // Use IconType for react-icons
  label: string;
}

// CardWithForm component implementation
export function CardWithForm({ Icon, label }: CardWithFormProps) {
  return (
    <Card className=" h-[3rem] flex justify-between items-center p-2 bg-primary-foreground ">
      <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground ">
        <Icon className="text-primary  bg-primary-foreground h-6 w-6" />
      </div>
      <div className="text-sm ml-2">{label}</div>
      <div>
        <Button variant="outline" size="icon" className="border-none bg-primary-foreground ">
          <ChevronRight className="h-4 " />
        </Button>
      </div>
    </Card>
  );
}
