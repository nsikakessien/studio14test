import { useState } from "react";
import {
  Flex,
  Text,
  VStack,
  HStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Link,
  Switch,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  DrawerCloseButton,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { resources } from "./utils/constants";
import LogoIcon from "../assets/logo.svg";
import HamburgerIcon from "../assets/hamburger.svg";

const navLinks = [
  { label: "Dashboard", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Toolkit", href: "#" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEmployee, setIsEmployee] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Resources");

  return (
    <>
      {/* Header */}
      <Flex
        as="header"
        bg="white"
        px={{ base: 4, md: 8 }}
        py={3}
        align="center"
        justify="space-between"
        shadow="sm"
      >
        <Flex gap={6} align={"center"}>
          <Flex align="center" gap={3}>
            {/* Logo */}
            <Image src={LogoIcon} alt="Logo Icon" />
            <Text
              fontWeight="bold"
              fontSize="lg"
              fontFamily={"Inter"}
              color={"#404040"}
            >
              LOGO
            </Text>
          </Flex>

          {/* Desktop Nav */}
          <HStack
            spacing={6}
            display={{ base: "none", md: "flex" }}
            flex="1"
            justify="center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontWeight="600"
                _hover={{ color: "#314EF9" }}
                onClick={() => setActiveMenu(link.label)}
                sx={{
                  position: "relative",
                  color: activeMenu === link.label ? "#314EF9" : "#2C3237",
                  height: "100%",
                  px: 2,
                }}
              >
                {link.label}

                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    left: "0",
                    right: "0",
                    height: "4px",
                    width: "100%",
                    backgroundColor:
                      activeMenu === link.label ? "#314EF9" : "transparent",
                  }}
                />
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* Right Section */}
        <HStack spacing={4}>
          {/* Switch */}
          <HStack display={"flex"} spacing={2}>
            <Switch
              isChecked={isEmployee}
              onChange={() => setIsEmployee(!isEmployee)}
              // colorScheme="blue"
              sx={{
                "span.chakra-switch__track[data-checked]": {
                  bg: "#314EF9 !important",
                },
                "span.chakra-switch__track:not([data-checked])": {
                  bg: "gray.300 !important",
                },
              }}
              width={"44px"}
            />
            <Text
              fontFamily={"Poppins"}
              fontSize="sm"
              fontWeight={600}
              color={"black"}
              display={{ base: "none", md: "flex" }}
            >
              Switch to Employee
            </Text>
          </HStack>

          <Box w={"2px"} height={"24px"} bg={"#E4E4E4"} />

          {/* Avatar Dropdown */}
          <Menu>
            <MenuButton>
              <HStack>
                <Avatar
                  size="sm"
                  name="Jonathan Amos"
                  bg="#17E4A1"
                  color={"black"}
                  fontSize={"12px"}
                  fontWeight={800}
                />
                <Text
                  display={{ base: "none", md: "block" }}
                  fontSize={"16px"}
                  fontWeight={600}
                  color={"#525252"}
                >
                  Jonathan
                </Text>
                <ChevronDownIcon />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>

          {/* Mobile Hamburger */}
          <Button
            aria-label="Open Menu"
            // icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            onClick={onOpen}
          >
            <Image src={HamburgerIcon} alt="open menu" height={"22px"} />
          </Button>
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  fontWeight="medium"
                  _hover={{ color: "#314EF9" }}
                  onClick={() => {
                    setActiveMenu(link.label);
                    onClose();
                  }}
                  sx={{
                    color: activeMenu === link.label ? "#314EF9" : "#2C3237",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
