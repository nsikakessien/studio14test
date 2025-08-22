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
import { FiSliders } from "react-icons/fi";
import SearchIcon from "../assets/search.svg";
import { useContext, useEffect, useState } from "react";
import resourceContext from "../context/resource/resourceContext";

export default function ResourcesHero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchResources } = useContext(resourceContext);

  const [search, setSearch] = useState("");

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
          leftIcon={<Icon as={FiSliders} />}
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </VStack>
    </Box>
  );
}
