import { Children } from "../../utils/types";

export interface ButtonProps {
  varient?: "primary" | "secondary" | "default" | "submit";
  arrow?: boolean;
  stroke?: boolean;
  color?: string;
  children: Children;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
