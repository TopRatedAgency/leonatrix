interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-green-900/50 py-16 mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">{title}</h1>
        {subtitle && <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  )
}

