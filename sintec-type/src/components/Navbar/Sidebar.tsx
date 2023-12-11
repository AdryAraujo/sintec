import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Text,
  Icon,
  IconButton,
  Divider,
  Avatar,
} from '@chakra-ui/react';
import {
  BsPersonAdd,
  BsPersonVcard,
} from "react-icons/bs";
import {
  FiDownload,
  FiFileText,
  FiGlobe,
  FiHome,
  FiMenu,
  FiPlusCircle,
  FiUser,
} from 'react-icons/fi';
import {
  HiOutlineDocumentSearch,
} from 'react-icons/hi';
import {
  IoKeyOutline,
  IoPeopleOutline,
  IoPersonCircleOutline,
  IoReceiptOutline,
  IoTodayOutline,
} from 'react-icons/io5';
import NavItem from './NavItem';
import Link from 'next/link';
import { IoIosLogOut } from "react-icons/io";
import style from '../../styles/SideBar.module.css'
import { LuFileDown } from "react-icons/lu";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState<"small" | "large">("large");

  return (
    <Flex
      h= "898px"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === "small" ? "12px" : "12px"}
      w={navSize === "small" ? "70px" : "250px"}
      flexDir="column"
      justifyContent="space-between"
      backgroundColor='cyan.100'
    >
      <Flex
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
        overflowY={'auto'}
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === "small")
              changeNavSize("large");
            else
              changeNavSize("small");
          }}
        />
        <NavItem navSize={navSize} icon={FiHome} title="Home" description="This is the description for the dashboard." href={''} />
        <Divider display={navSize === "small" ? "none" : "flex"} borderColor={'gray.400'} />
        <NavItem navSize={navSize} icon={FiDownload} title="Importar Contas BK" href={'/ImportBk'}/>
        <NavItem navSize={navSize} icon={LuFileDown} title="Importar Contas Oi" href={'/ImportOi'}/>
        <NavItem navSize={navSize} icon={IoReceiptOutline} title="Contas Detalhados" href={'/ContDet'}/>
        <NavItem navSize={navSize} icon={FiFileText} title="Contas Analítico"  href={'/ContAna'} />
        <NavItem navSize={navSize} icon={HiOutlineDocumentSearch} title="Circuitos Cadastrados" href={'/CircCad'} />
        <NavItem navSize={navSize} icon={BsPersonAdd} title="Cadastrar Fornecedor" href={'/CadastroForn'} />
        <Divider display={navSize === "small" ? "none" : "flex"} borderColor={'gray.400'} />
        <NavItem navSize={navSize} icon={IoTodayOutline} title="Cadastrar Reunião" href={''} />
        <NavItem navSize={navSize} icon={FiUser} title="Consultar Servidor" href={''} />
        <NavItem navSize={navSize} icon={IoPeopleOutline} title="Equipe Diretiva" href={''} />
        <Divider display={navSize === "small" ? "none" : "flex"} borderColor={'gray.400'} />
        <NavItem navSize={navSize} icon={IoPersonCircleOutline} title="Administrar Perfil" href={''} />
        <NavItem navSize={navSize} icon={BsPersonVcard} title="Gerenciar Usuário" href={'/CadastroUser'} />
        <NavItem navSize={navSize} icon={FiGlobe} title="Monitorar Rede" href={''} />
        <NavItem navSize={navSize} icon={IoKeyOutline} title="Lista de Credenciais" href={''} />
        <Divider display={navSize === "small" ? "none" : "flex"} borderColor={'gray.400'}/>
        <NavItem navSize={navSize} icon={IoIosLogOut} title="Sair" href={''} />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mt={2}
        mb={6}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
            <Heading as="h3" size="sm">Sylwia Weller</Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
