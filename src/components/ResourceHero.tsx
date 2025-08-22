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
} from "@chakra-ui/react";
import { FiSliders } from "react-icons/fi";
import SearchIcon from "../assets/search.svg";

interface ResourceHeroProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function ResourcesHero({
  search,
  setSearch,
}: ResourceHeroProps) {
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
        >
          Show Filters
        </Button>
      </VStack>
    </Box>
  );
}
