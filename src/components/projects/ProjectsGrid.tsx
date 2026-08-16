"use client";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard, { ProjectData } from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectData[];
  featuredCount?: number;
}

export default function ProjectsGrid({
  projects,
  featuredCount = 3,
}: ProjectsGridProps) {
  const featured = projects.slice(0, featuredCount);
  const rest = projects.slice(featuredCount);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Featured projects — large horizontal cards */}
      <div className="space-y-8">
        {featured.map((project, i) => (
          <FeaturedProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Remaining projects — compact grid */}
      {rest.length > 0 && (
        <>
          <div className="mt-12 mb-6 flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            <span className="font-mono">more_projects</span>
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
