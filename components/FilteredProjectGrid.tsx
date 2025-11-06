"use client";

import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import WorkFilter from "./WorkFilter";
import type { ProjectFrontmatter } from "@/lib/projects";

type FilterType = "all" | "personal" | "client";

export default function FilteredProjectGrid({
  allProjects,
  personalProjects,
  clientProjects,
}: {
  allProjects: ProjectFrontmatter[];
  personalProjects: ProjectFrontmatter[];
  clientProjects: ProjectFrontmatter[];
}) {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : filter === "personal"
      ? personalProjects
      : clientProjects;

  return (
    <>
      <WorkFilter />
      {filteredProjects.length > 0 ? (
        <ProjectGrid projects={filteredProjects} />
      ) : (
        <div className="text-center py-16 text-white/50">
          <p>No projects in this category yet.</p>
        </div>
      )}
    </>
  );
}

