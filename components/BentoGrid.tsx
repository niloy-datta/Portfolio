'use client'

import { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  span?: string
  gradient?: string
  id?: string
}

export function BentoCard({ children, className = '', span = 'col-span-1', gradient, id }: BentoCardProps) {
  return (
    <div
      id={id}
      className={`
        group relative
        glass-premium
        rounded-2xl sm:rounded-3xl
        p-5 sm:p-6 md:p-8 lg:p-10
        hover:border-white/30
        hover:shadow-[0_25px_70px_0_rgba(0,0,0,0.6),0_12px_30px_0_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.15)]
        hover:scale-[1.02]
        transition-all duration-500 ease-out
        overflow-hidden
        ${span}
        ${className}
      `}
    >
      {gradient && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none blur-xl`}
        />
      )}
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shimmer-effect" />
      
      <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  )
}

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <section className={`w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 auto-rows-fr">
          {children}
        </div>
      </div>
    </section>
  )
}
