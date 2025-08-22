import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ResourcesHero from "./components/ResourceHero";
import { resources } from "./utils/constants";
import ResourceList from "./components/ResourceList";

function App() {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <ResourcesHero search={search} setSearch={setSearch} />
      <ResourceList filteredResources={filteredResources} />
    </>
    // <Flex direction="column" minH="100vh" bg="gray.50">
    //   {/* Header */}
    //   <Flex
    //     as="header"
    //     px={6}
    //     py={3}
    //     bg="white"
    //     boxShadow="sm"
    //     align="center"
    //     justify="space-between"
    //   >
    //     <Flex align="center" gap={6}>
    //       <Flex align="center" gap={3}>
    //         <Image src={LogoIcon} height={"36px"} width={"36px"} />
    //         <Text fontWeight="bold">LOGO</Text>
    //       </Flex>

    //       <HStack display={{ base: "none", md: "flex" }} spacing={6}>
    //         <Text cursor="pointer">Dashboard</Text>
    //         <Text
    //           cursor="pointer"
    //           fontWeight="bold"
    //           borderBottom="2px solid blue"
    //         >
    //           Resources
    //         </Text>
    //         <Text cursor="pointer">Toolkit</Text>
    //       </HStack>
    //     </Flex>

    //     <IconButton
    //       display={{ base: "block", md: "none" }}
    //       aria-label="Menu"
    //       icon={<HamburgerIcon />}
    //       onClick={onOpen}
    //     />
    //   </Flex>

    //   {/* Mobile Drawer */}
    //   <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    //     <DrawerOverlay />
    //     <DrawerContent>
    //       <DrawerHeader>Filters</DrawerHeader>
    //       <DrawerBody>
    //         <VStack align="start">
    //           <Checkbox>Secure Base</Checkbox>
    //           <Checkbox>Sense of Appreciation</Checkbox>
    //           <Checkbox>Learning Organisation</Checkbox>
    //           <Checkbox>Mission and Vision</Checkbox>
    //           <Checkbox>Wellbeing</Checkbox>
    //         </VStack>
    //       </DrawerBody>
    //     </DrawerContent>
    //   </Drawer>

    //   {/* Content */}
    //   <Box flex="1" px={{ base: 4, md: 10 }} py={6}>
    //     <Text fontSize="3xl" fontWeight="bold">
    //       Resources
    //     </Text>
    //     <Text color="gray.500" maxW="2xl">
    //       Consectetur adipiscing elit dui tristique sollicitudin nibh sit amet
    //       commodo nulla facilisi nullam...
    //     </Text>

    //     {/* Search */}
    //     <InputGroup my={6} maxW="lg">
    //       <InputLeftElement
    //         pointerEvents="none"
    //         children={<SearchIcon color="gray.400" />}
    //       />
    //       <Input
    //         placeholder="Search by title or keyword"
    //         value={search}
    //         onChange={(e) => setSearch(e.target.value)}
    //       />
    //     </InputGroup>

    //     {/* Filters (desktop only) */}
    //     <Flex>
    //       <Box w="250px" mr={8} display={{ base: "none", md: "block" }}>
    //         <Text fontWeight="semibold" mb={2}>
    //           Key Foundational Principles
    //         </Text>
    //         <VStack align="start" spacing={2}>
    //           <Checkbox defaultChecked>Secure Base</Checkbox>
    //           <Checkbox>Sense of Appreciation</Checkbox>
    //           <Checkbox>Learning Organisation</Checkbox>
    //           <Checkbox>Mission and Vision</Checkbox>
    //           <Checkbox defaultChecked>Wellbeing</Checkbox>
    //         </VStack>
    //         <Box mt={6}>
    //           <Text fontWeight="semibold" mb={2}>
    //             Document Type
    //           </Text>
    //           <VStack align="start" spacing={2}>
    //             <Checkbox>DOC</Checkbox>
    //             <Checkbox>Link</Checkbox>
    //             <Checkbox>PDF</Checkbox>
    //             <Checkbox>Video</Checkbox>
    //           </VStack>
    //         </Box>
    //       </Box>

    //       {/* Resource grid */}
    //       <SimpleGrid flex="1" columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
    //         {filteredResources.map((r) => (
    //           <ResourceCard key={r.id} res={r} />
    //         ))}
    //       </SimpleGrid>
    //     </Flex>
    //   </Box>
    // </Flex>
  );
}

export default App;
