import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../../hooks/useLang'

export default function ProjectCard({ project, index = 0 }) {
  const { t } = useLang()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden bg-white border border-light hover:border-black transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black text-xs font-sub font-medium px-4 py-2 hover:bg-zinc-100 transition-colors"
          >
            <ExternalLink size={13} /> {t('projects.viewProject')}
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white text-white text-xs font-sub font-medium px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            <Github size={13} /> {t('projects.viewCode')}
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-base text-black mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-sub text-secondary border border-light px-2 py-0.5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
