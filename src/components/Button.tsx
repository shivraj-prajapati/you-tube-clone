import {VariantProps, cva } from "class-variance-authority"
import {ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const buttoStyles = cva(["transition-colors"],
    {
        variants: {
            varient: {
                default: ["bg-secondary", "hover:bg-secondary-hover"],
                ghost: ["hover:bg-gray-100"],
                dark: ["bg-secondary-dark", "hover:bg-secondary-dark-hover, text-secondary"],
            },
            size: {
                default: ["rounded", "p-2"],
                icons: [
                    "rounded-full",
                    "w-10",
                    "h-10",
                    "flex",
                    "items-center",
                    "justify-center",
                    "p-2.5",
                ],
            }
        },
        defaultVariants: {
            varient: "default",
            size: "default",
        }
    }
) 

type ButtonProps = VariantProps<typeof buttoStyles> & ComponentProps<"button">

export default function Button({varient, size, className, ...props}: ButtonProps) {
  return <button {...props} className={twMerge(buttoStyles({varient, size}), className)} />
}
