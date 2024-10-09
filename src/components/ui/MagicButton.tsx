import { ReactNode } from "react";
import Link from "next/link";




const MagicButton = ({className, text, icon, iconPosition, href}: {className?: string, iconPosition?: string , text: string, icon?: ReactNode, href: string}) => {
  return (
    <Link href={href}>
      <button className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none  ${className}`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 text-sm font-medium text-white backdrop-blur-3xl">
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
      </span>
      </button>
  </Link>
    
  )
}

export default MagicButton;