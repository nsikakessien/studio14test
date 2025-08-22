import {
  Box,
  Checkbox,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ResourceCard from "./ResourceCard";
import type { Resource } from "../utils/constants";

interface ResourceListProps {
  filteredResources: Resource[];
}

export default function ResourceList({ filteredResources }: ResourceListProps) {
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
              <Checkbox
                icon={<></>}
                sx={{
                  "& .chakra-checkbox__control": {
                    borderColor: "#3F3F3F",
                    bg: "transparent",
                    _checked: {
                      bg: "#3F3F3F",
                      borderColor: "#3F3F3F",
                    },
                  },
                }}
                defaultChecked
                color={"#3F3F3F"}
              >
                Secure Base
              </Checkbox>
              <Checkbox
                icon={<></>}
                color={"#3F3F3F"}
                sx={{
                  "& .chakra-checkbox__control": {
                    borderColor: "#3F3F3F",
                    bg: "transparent",
                    _checked: {
                      bg: "#3F3F3F",
                      borderColor: "#3F3F3F",
                    },
                  },
                }}
              >
                Sense of Appreciation
              </Checkbox>
              <Checkbox
                icon={<></>}
                color={"#3F3F3F"}
                sx={{
                  "& .chakra-checkbox__control": {
                    borderColor: "#3F3F3F",
                    bg: "transparent",
                    _checked: {
                      bg: "#3F3F3F",
                      borderColor: "#3F3F3F",
                    },
                  },
                }}
              >
                Learning Organisation
              </Checkbox>
              <Checkbox
                icon={<></>}
                color={"#3F3F3F"}
                sx={{
                  "& .chakra-checkbox__control": {
                    borderColor: "#3F3F3F",
                    bg: "transparent",
                    _checked: {
                      bg: "#3F3F3F",
                      borderColor: "#3F3F3F",
                    },
                  },
                }}
              >
                Mission and Vision
              </Checkbox>
              <Checkbox
                icon={<></>}
                color={"#3F3F3F"}
                sx={{
                  "& .chakra-checkbox__control": {
                    borderColor: "#3F3F3F",
                    bg: "transparent",
                    _checked: {
                      bg: "#3F3F3F",
                      borderColor: "#3F3F3F",
                    },
                  },
                }}
                defaultChecked
              >
                Wellbeing
              </Checkbox>
            </VStack>
            <Box mt={6}>
              <Text fontWeight="semibold" mb={2}>
                Document Type
              </Text>
              <VStack align="start" spacing={2}>
                <Checkbox
                  icon={<></>}
                  color={"#3F3F3F"}
                  sx={{
                    "& .chakra-checkbox__control": {
                      borderColor: "#3F3F3F",
                      bg: "transparent",
                      _checked: {
                        bg: "#3F3F3F",
                        borderColor: "#3F3F3F",
                      },
                    },
                  }}
                >
                  DOC
                </Checkbox>
                <Checkbox
                  icon={<></>}
                  color={"#3F3F3F"}
                  sx={{
                    "& .chakra-checkbox__control": {
                      borderColor: "#3F3F3F",
                      bg: "transparent",
                      _checked: {
                        bg: "#3F3F3F",
                        borderColor: "#3F3F3F",
                      },
                    },
                  }}
                >
                  Link
                </Checkbox>
                <Checkbox
                  icon={<></>}
                  color={"#3F3F3F"}
                  sx={{
                    "& .chakra-checkbox__control": {
                      borderColor: "#3F3F3F",
                      bg: "transparent",
                      _checked: {
                        bg: "#3F3F3F",
                        borderColor: "#3F3F3F",
                      },
                    },
                  }}
                >
                  PDF
                </Checkbox>
                <Checkbox
                  icon={<></>}
                  color={"#3F3F3F"}
                  sx={{
                    "& .chakra-checkbox__control": {
                      borderColor: "#3F3F3F",
                      bg: "transparent",
                      _checked: {
                        bg: "#3F3F3F",
                        borderColor: "#3F3F3F",
                      },
                    },
                  }}
                >
                  Video
                </Checkbox>
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
