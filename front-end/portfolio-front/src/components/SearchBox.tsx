"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const selected = projects.find((proj) => proj.name === name);
    if (selected && selected.categories.length > 0 && selected.slug) {
      const categorySlug = selected.categories[0].toLowerCase().replace(/\s+/g, "-");
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
    <div style={{ position: "relative" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search my catalogue..."
          value={query}
          onChange={handleInputChange}
          className="search"
        />
      </form>
      {suggestions.length > 0 && (
        <ul style={{
          position: "absolute",
          backgroundColor: "#222",
          color: "white",
          listStyle: "none",
          margin: 0,
          padding: "4px 0",
          width: "100%",
          border: "1px solid #333",
          zIndex: 999
        }}>
          {suggestions.map((name) => (
            <li
              key={name}
              onClick={() => handleSelect(name)}
              style={{
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
