"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";
import { cn } from "@/lib/utils";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { User } from "lucide-react";

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const UserTypeCard = ({
  value,
  title,
  text,
  register,
  userType,
  setUserType,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType == value && "border-orange"
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-3",
                userType == value && "border-orange"
              )}
            >
              <User
                size={30}
                className={cn(
                  userType == value ? "text-orange" : "text-gray-400"
                )}
              />
            </Card>
            <div className="">
              <CardDescription
                className={cn(
                  userType == value ? "text-orange" : "text-gray-400"
                )}
              >
                {title}
              </CardDescription>
              <CardDescription>{text}</CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
