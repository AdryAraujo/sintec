import React from 'react';
import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import NavHoverBox from './NavHoverBox';

export default function NavItem({ icon, title, description, active, navSize, href }) {
  return (
    <Flex mt={1} flexDir="column" w="100%" alignItems={navSize === "small" ? "center" : "flex-start"}>
      <Menu placement="right">
        <Link
          display={'flex'}
          as="a"
          href={href}
          rel="noopener noreferrer"
          backgroundColor={active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: 'white', backgroundColor: "white" }}
          w={navSize === "large" && "100%"}
        >
          <MenuButton
            as="a"
            backgroundColor={active && "#AEC8CA"}
            display={'block'}
            w="100%"
          >
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
              <Text ml={4} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
}
