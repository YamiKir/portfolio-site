import { projects } from "@/data/projects";
import { categoryNameMap } from "@/data/categories";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Params = {
  category: string;
  project: string;
};

function getGithubDownloadUrl(githubUrl: string, branch = "main") {
  return `${githubUrl.replace(/\/$/, "")}/archive/refs/heads/${branch}.zip`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, project: projectSlug } = await params;

  const project = projects.find(
    (proj) =>
      proj.slug === projectSlug &&
      proj.categories.some(
        (cat) =>
          typeof cat === "string" &&
          cat.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
      )
  );

  if (!project) notFound();

  return {
    title: `${project.name} | ${categoryNameMap[category] ?? category}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, project: projectSlug } = await params;

  const project = projects.find(
    (proj) =>
      proj.slug === projectSlug &&
      proj.categories.some(
        (cat) =>
          typeof cat === "string" &&
          cat.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
      )
  );

  if (!project) return notFound();

  return (
    <div className={styles.container}>
      <h1>{project.name}</h1>

      <Image
        src={project.image}
        alt={project.name}
        width={300}
        height={300}
        className={styles.cardImage}
      />

      <p>{project.description}</p>

      {project.github ? (
        <>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub</button>
          </a>

          <a
            href={getGithubDownloadUrl(project.github)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Download Source</button>
          </a>
        </>
      ) : project.file ? (
        <a href={project.file} download>
          <button>Download</button>
        </a>
      ) : null}
    </div>
  );
}