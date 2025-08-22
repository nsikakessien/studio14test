import {
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
  VStack,
  Image,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Checkbox,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { IoFilterSharp } from "react-icons/io5";
import SearchIcon from "../assets/search.svg";
import { useContext, useEffect, useState } from "react";
import resourceContext from "../context/resource/resourceContext";
import { resourceTags } from "../utils/constants";

export default function ResourcesHero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchResources, searchByTag } = useContext(resourceContext);

  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string[]>(resourceTags);

  useEffect(() => {
    if (selectedTag.length > 0) {
      searchByTag(selectedTag);
    } else {
      searchByTag([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTag]);

  useEffect(() => {
    searchResources(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Box
      as="section"
      bg="#F2F2F2"
      pt={{ base: 8, md: 12 }}
      pb={{ base: 8, md: 12 }}
    >
      <VStack
        spacing={{ base: 6, md: 7 }}
        mx="auto"
        px={{ base: 4, md: 8 }}
        maxW="6xl"
      >
        <Heading
          as="h1"
          fontSize={{ base: "40px", md: "52px" }}
          color={"#2C3237"}
          textAlign="center"
          fontWeight="700"
        >
          Resources
        </Heading>

        <Text
          maxW="3xl"
          textAlign="center"
          color="#2C3237"
          lineHeight="tall"
          fontSize={{ base: "md", md: "lg" }}
        >
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue
        </Text>

        {/* Search */}
        <InputGroup
          size="lg"
          maxW={{ base: "full", md: "860px" }}
          w="full"
          borderRadius="10px"
        >
          <InputLeftElement pointerEvents="none">
            <Image src={SearchIcon} alt="search icon" />
          </InputLeftElement>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or keyword"
            bg="white"
            borderRadius="10px"
            _placeholder={{ color: "#4F4F4F" }}
          />
        </InputGroup>

        {/* Mobile: Show Filters */}
        <Button
          leftIcon={<Icon as={IoFilterSharp} />}
          variant="ghost"
          display={{ base: "inline-flex", md: "none" }}
          onClick={onOpen}
        >
          Show Filters
        </Button>

        {/* Mobile Drawer */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filters</DrawerHeader>

            <DrawerBody>
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </VStack>
    </Box>
  );
}
