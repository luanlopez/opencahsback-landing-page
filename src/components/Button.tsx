import { ButtonHTMLAttributes, ReactNode } from 'react'
import cslx, { ClassValue } from 'clsx'

type ButtonProps = {
  label: string
  children?: ReactNode
  additionalClasses?: ClassValue[]
  size?: 'small' | 'medium' | 'large' | 'full'
} & ButtonHTMLAttributes<HTMLButtonElement>

const BUTTON_SIZES_CLASSES = {
  small: 'w-[10.5rem] h-[2.5rem] text-sm',
  medium: 'w-full h-[2.75rem] text-sm',
  large: 'w-[13.125rem] h-[3.75rem] text-base',
  full: 'w-full h-[3.75rem]'
}

export function Button({
  label,
  size = 'full',
  additionalClasses,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cslx(
        `
        flex justify-center text-brand-secondary bg-brand-main
        font-semibold hover:brightness-90 rounded-lg text-center  
        transition-all ease-in delay-75 items-center gap-2
      `,
        additionalClasses,
        BUTTON_SIZES_CLASSES[size]
      )}
    >
      <span>{label}</span>

      {children}
    </button>
  )
}
