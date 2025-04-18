
interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  highlight, 
  description, 
  centered = true,
  className = ""
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-editor-dark mb-4">
        {title}{' '}
        {highlight && <span className="text-editor-red">{highlight}</span>}
      </h2>
      
      {centered && <div className="h-1 w-20 bg-editor-red rounded-full mx-auto mb-6"></div>}
      {!centered && <div className="h-1 w-20 bg-editor-red rounded-full mb-6"></div>}
      
      {description && (
        <p className="text-gray-700 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
