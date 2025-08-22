import { createContext } from "react";
import type { Resource } from "../../utils/constants";

interface ResourceContextType {
  filteredResources: Resource[];
  searchResources: (search: string) => void;
  searchByTag: (tags: string[]) => void;
  searchByType: (resourceTypes: string[]) => void;
}

const resourceContext = createContext<ResourceContextType>(
  {} as ResourceContextType
);

export default resourceContext;
