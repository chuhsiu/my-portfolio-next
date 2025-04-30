import { getProject } from "@/hooks/useFetchJson";
import { getLocale } from "next-intl/server";
import ProjectClient from "./ProjectClient";
async function Projects() {
  const locale = await getLocale();
  const data = await getProject();

  return <ProjectClient data={data} locale={locale} />;
}

export default Projects;
