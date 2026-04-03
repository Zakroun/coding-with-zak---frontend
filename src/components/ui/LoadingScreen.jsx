import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        className="flex gap-1.5"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-black rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </motion.div>
    </div>
  )
}
