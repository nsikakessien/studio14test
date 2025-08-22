import { useCallback, useState } from "react";
import type { Resource } from "../../utils/constants";
import { resources } from "../../utils/constants";
import resourceContext from "./resourceContext";

export default function ResourceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filteredResources, setFilteredResources] =
    useState<Resource[]>(resources);

  const searchResources = useCallback((search: string) => {
    const filtered = resources.filter((r) =>
      r.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredResources(filtered);
  }, []);

  const searchByTag = useCallback((tags: string[]) => {
    const filtered = resources.filter((r) => r.tag && tags.includes(r.tag));
    setFilteredResources(filtered);
  }, []);

  const searchByType = useCallback((resourceTypes: string[]) => {
    const filtered = resources.filter(
      (r) => r.type && resourceTypes.includes(r.type)
    );
    setFilteredResources(filtered);
  }, []);

  return (
    <resourceContext.Provider
      value={{ filteredResources, searchResources, searchByTag, searchByType }}
    >
      {children}
    </resourceContext.Provider>
  );
}
