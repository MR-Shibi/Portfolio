import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card bg-portfolio-dark-grey border border-portfolio-red/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-portfolio-red/50">
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-portfolio-dark-grey to-portfolio-lighter-black flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-portfolio-red/50 text-6xl">📱</div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-portfolio-red/10 text-portfolio-red border border-portfolio-red/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <Button size="sm" variant="secondary" asChild className="flex-1">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                GitHub
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" asChild className="flex-1">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
