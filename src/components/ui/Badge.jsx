export default function Badge({ children }) {
  return (
    <span className="badge">
      <span className="w-1 h-1 bg-secondary rounded-full inline-block" />
      {children}
    </span>
  )
}
