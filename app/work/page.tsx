import { getAllProjects, getPersonalProjects, getClientProjects } from "@/lib/projects";
import WorkHeader from "@/components/WorkHeader";
import FilteredProjectGrid from "@/components/FilteredProjectGrid";

export default async function WorkPage() {
  const allProjects = await getAllProjects();
  const personalProjects = await getPersonalProjects();
  const clientProjects = await getClientProjects();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <WorkHeader />

        <FilteredProjectGrid
          allProjects={allProjects}
          personalProjects={personalProjects}
          clientProjects={clientProjects}
        />
      </div>
    </div>
  );
}

