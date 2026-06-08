import type { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon | undefined;
  const staggerClass = `stagger-${Math.min(index + 1, 5)}`;

  return (
    <div
      className={`animate-fade-in-up ${staggerClass} border border-gray-200 rounded-xl p-6 bg-white shadow-sm move-up-on-hover hover:shadow-lg transition-all duration-300`}
    >
      {IconComponent && (
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>
      )}

      <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>

      <p className="text-text-light leading-relaxed">{description}</p>
    </div>
  );
}
