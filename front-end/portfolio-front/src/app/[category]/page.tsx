import styles from "../../styles/Home.module.css";
import { projects } from "@/data/projects";
import { categoryNameMap } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

type Params = {
  category: string;
};

// Page metadata generation
export async function generateMetadata({ params }: { params: Params }) {
  const local_params = await params;
  const cat = await local_params.category;
  return {
    title: `${categoryNameMap[cat] ?? cat} Projects`,
  };
}

// Page component
export default async function CategoryPage({ params }: { params: Params }) {
  const local_params = await params;
  const category = await local_params.category;

  const filteredProjects = projects.filter(
    (proj) =>
      Array.isArray(proj.categories) &&
      proj.categories.some(
        (cat) =>
          typeof cat === "string" &&
          cat.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
      )
  );

  return (
    <div className={styles.container}>
      <h1>{categoryNameMap[category] ?? category} Projects</h1>

      {filteredProjects.length === 0 ? (
        <p>No projects found in this category.</p>
      ) : (
        <div className={styles.rowItems}>
          {filteredProjects.map((proj) => (
            <div key={proj.name} className={styles.card}>
              <Link href={`/${category}/${proj.slug}`} className ={styles.card}>
                <div>
                  <Image
                    src={proj.image}
                    alt={proj.name}
                    width={150}
                    height={150}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardLabel}>{proj.name}</div>
                </div>
              </Link>
              <a href={proj.file} download>
                <button style={{ marginTop: "8px" }}>Download</button>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
