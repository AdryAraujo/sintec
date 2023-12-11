import Link from 'next/link';
import React from 'react';
import { Flex, Text, Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import NavHoverBox from './NavHoverBox';

export default function NavItem({ icon, title, description, active, navSize, href }) {
  return (
    <Flex mt={1} flexDir="column" w="100%" alignItems={navSize === "small" ? "center" : "flex-start"}>
      <Menu placement="right">
        <Link href={href}>
          <a>
            <MenuButton as="div" className="menu-button" >
              <Flex>
                <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                <Text ml={4} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
              </Flex>
            </MenuButton>
          </a>
        </Link>
        {/* <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList> */}
      </Menu>
    </Flex>
  );
}