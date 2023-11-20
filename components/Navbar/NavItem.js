import React from 'react'
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList
} from '@chakra-ui/react'
import NavHoverBox from './NavHoverBox'
import NextLink from 'next/link';

export default function NavItem({ icon, title, description, active, navSize, href }) {
  return (
    <Flex
      mt={1}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <NextLink href={href} passHref>
          {/* Added a 'rel' prop to the Link component */}
          <Link
            display={'flex'}
            as="a"
            rel="noopener noreferrer"
            backgroundColor={active && "#AEC8CA"}
            p={3}
            borderRadius={8}
            _hover={{ textDecor: 'white', backgroundColor: "white" }}
            w={navSize === "large" && "100%"}
          >
            {/* Added a 'href' prop to the MenuButton component */}
            <MenuButton
              href={href}
              w="100%"
              as="a"
              backgroundColor={active && "#AEC8CA"}
              display={'block'}
            >
              <Flex>
                <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                <Text ml={4} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
              </Flex>
            </MenuButton>
          </Link>
          <MenuList
            py={0}
            border="none"
            w={200}
            h={200}
            ml={5}
          >
            <NavHoverBox title={title} icon={icon} description={description} />
          </MenuList>
        </NextLink>
      </Menu>
    </Flex>
  );
}
