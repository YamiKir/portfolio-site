"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "@/styles/SearchBox.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setQuery(value);

    const filtered = projects
      .filter((proj) =>
        proj.name.toLowerCase().includes(value.toLowerCase())
      )
      .map((proj) => proj.name);

    setSuggestions(value.trim() === "" ? [] : filtered);
  };

  const handleSelect = (name: string) => {
    const selected = projects.find(
      (proj) => proj.name === name
    );

    if (
      selected &&
      selected.categories.length > 0 &&
      selected.slug
    ) {
      const categorySlug = selected.categories[0]
        .toLowerCase()
        .replace(/\s+/g, "-");

      router.push(`/${categorySlug}/${selected.slug}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search catalogue..."
          value={query}
          onChange={handleInputChange}
          className={styles.search}
          aria-label="Search project catalogue"
        />
      </form>

      {suggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {suggestions.map((name) => (
            <li key={name}>
              <button
                type="button"
                onClick={() => handleSelect(name)}
                className={styles.suggestion}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}