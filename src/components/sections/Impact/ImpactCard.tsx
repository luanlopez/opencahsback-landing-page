import { motion } from 'framer-motion'

import { getVariants } from '@/constants/animation-variants'

type ImpactCardProps = {
  index: number
  title: string
  description: string
  icon: React.ReactNode
}

export function ImpactCard({
  index,
  title,
  description,
  icon
}: ImpactCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center md:items-start"
      variants={getVariants({ delay: 0.1 * index })}
    >
      <div className="flex items-center gap-5">
        <span className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.625rem]">
          {title}
        </span>
        <div className="w-6 lg:w-8 xl:w-9 2xl:w-[2.625rem]">{icon}</div>
      </div>

      <span className="mt-1 text-sm lg:text-base text-white opacity-70">
        {description}
      </span>
    </motion.div>
  )
}
