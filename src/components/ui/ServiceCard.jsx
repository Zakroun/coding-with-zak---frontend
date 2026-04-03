import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, desc, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group border border-light p-7 hover:border-black hover:shadow-xl transition-all duration-300 bg-white cursor-default"
    >
      <div className="w-10 h-10 border border-light group-hover:border-black group-hover:bg-black transition-all duration-300 flex items-center justify-center mb-5">
        <Icon size={18} className="text-black group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-heading font-bold text-base text-black mb-2 leading-snug">{title}</h3>
      <p className="font-body text-sm text-secondary leading-relaxed">{desc}</p>
    </motion.div>
  )
}
