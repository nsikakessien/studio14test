import {
  Box,
  Checkbox,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ResourceCard from "./ResourceCard";
import { useContext, useEffect, useState } from "react";
import resourceContext from "../context/resource/resourceContext";
import { resourceTags, resourceTypes } from "../utils/constants";

export default function ResourceList() {
  const { filteredResources, searchByTag, searchByType } =
    useContext(resourceContext);

  const [selectedTag, setSelectedTag] = useState<string[]>(resourceTags);
  const [selectedType, setSelectedType] = useState<string[]>(resourceTypes);

  useEffect(() => {
    if (selectedTag.length > 0) {
      searchByTag(selectedTag);
    } else {
      searchByTag([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTag]);

  useEffect(() => {
    if (selectedType.length > 0) {
      searchByType(selectedType);
    } else {
      searchByType([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]);

  return (
    <>
      {/* Filters (desktop only) */}
      <Flex px={{ base: 4, md: "100px" }} py={{ base: 4, md: "50px" }}>
        <Box w="250px" mr={8} display={{ base: "none", md: "block" }}>
          <Box px={4} pb={4} borderBottom="1px solid #E0E0E0" mb={6}>
            <Text fontWeight="bold" color={"#3F3F3F"}>
              Filters
            </Text>
          </Box>

          <Box px={4}>
            <Text
              fontWeight="bold"
              mb={6}
              color={"#3F3F3F"}
              whiteSpace={"nowrap"}
            >
              Key Foundational Principles
            </Text>
            <VStack align="start" spacing={2}>
              {resourceTags.map((resourceTag) => (
                <Checkbox
                  key={resourceTag}
                  value={resourceTag}
                  // icon={<span />}
                  isChecked={selectedTag.includes(resourceTag)}
                  onChange={() =>
                    setSelectedTag((prev) =>
                      prev.includes(resourceTag)
                        ? prev.filter((tag) => tag !== resourceTag)
                        : [...prev, resourceTag]
                    )
                  }
                  sx={{
                    "& .chakra-checkbox__control": {
                      borderColor: "#3F3F3F",
                      bg: "transparent",
                      _checked: {
                        bg: "#3F3F3F",
                        borderColor: "#3F3F3F",
                      },
                      _hover: {
                        bg: "#3F3F3F",
                        borderColor: "#3F3F3F",
                      },
                    },
                  }}
                  color={"#3F3F3F"}
                >
                  {resourceTag}
                </Checkbox>
              ))}
            </VStack>

            <Box mt={6}>
              <Text fontWeight="semibold" mb={2}>
                Document Type
              </Text>
              <VStack align="start" spacing={2}>
                {resourceTypes.map((resourceType) => (
                  <Checkbox
                    key={resourceType}
                    value={resourceType}
                    // icon={<span />}
                    color={"#3F3F3F"}
                    isChecked={selectedType.includes(resourceType)}
                    onChange={() =>
                      setSelectedType((prev) =>
                        prev.includes(resourceType)
                          ? prev.filter((type) => type !== resourceType)
                          : [...prev, resourceType]
                      )
                    }
                    sx={{
                      "& .chakra-checkbox__control": {
                        borderColor: "#3F3F3F",
                        bg: "transparent",
                        _checked: {
                          bg: "#3F3F3F",
                          borderColor: "#3F3F3F",
                        },
                        _hover: {
                          bg: "#3F3F3F",
                          borderColor: "#3F3F3F",
                        },
                      },
                    }}
                  >
                    {resourceType}
                  </Checkbox>
                ))}
              </VStack>
            </Box>
          </Box>
        </Box>

        {/* Resource grid */}
        <SimpleGrid flex="1" columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredResources.map((r) => (
            <ResourceCard key={r.id} res={r} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
