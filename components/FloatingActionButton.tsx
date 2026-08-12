'use client'

export default function FloatingActionButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href="#contact"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent-green flex items-center justify-center active:bg-green-400 hover:bg-green-400 transition-colors shadow-lg touch-target"
        aria-label="Send message"
      >
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-dark-green" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
          />
        </svg>
      </a>
    </div>
  )
}
