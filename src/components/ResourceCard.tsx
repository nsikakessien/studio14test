import { Box, Image, Tag, Text } from "@chakra-ui/react";
import type { Resource } from "../utils/constants";

export default function ResourceCard({ res }: { res: Resource }) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      overflow="hidden"
      border="1px solid"
      borderColor="#FAFAFA"
      _hover={{ boxShadow: "md" }}
      position={"relative"}
    >
      {res.image ? (
        <Image src={res.image} sx={{ ...res.styles, zIndex: 0 }} />
      ) : null}
      <Box pt={12} px={6} pb={6} position={"relative"} zIndex={1}>
        <Box>
          {res.icon ? (
            <Image src={res.icon} alt={res.type} boxSize="24px" mb={12} />
          ) : null}
        </Box>
        <Text fontWeight="bold" fontSize="md" color={"#2C3237"}>
          {res.title}
        </Text>
        <Text fontSize="sm" color="#828282" mt={4}>
          {res.topic}
        </Text>
        <Tag size="sm" mt={4} p={2} borderRadius={"19px"} color={"#222222"}>
          {res.tag}
        </Tag>
      </Box>
    </Box>
  );
}
