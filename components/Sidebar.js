import React, { useState } from 'react'
import { Flex, Text, IconButton, Divider, Avatar, Heading } from '@chakra-ui/react'
import { FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign, FiBriefcase, FiSettings, FiDownload, FiFileText, FiGlobe } from 'react-icons/fi'
import { IoDownloadOutline, IoKeyOutline, IoPawOutline, IoPeopleOutline, IoPersonAddOutline, IoPersonCircleOutline, IoReceiptOutline, IoSearch, IoTodayOutline } from 'react-icons/io5'
import NavItem from '../components/NavItem'
import { HiOutlineDocumentSearch, HiOutlineUsers } from 'react-icons/hi'
import { BsFileEarmarkPerson, BsPersonAdd, BsPersonVcard } from "react-icons/bs";

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="900px"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "240px"}
            flexDir="column"
            justifyContent="space-between"
            backgroundColor='cyan.100'
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." />
                <Divider display={navSize == "small" ? "none" : "flex"} borderColor={'gray.400'} />
                <NavItem navSize={navSize} icon={FiDownload} title="Importar Contas" _hover={{ background: '#fff' }} />
                <NavItem navSize={navSize} icon={IoReceiptOutline} title="Contas Detalhados" />
                <NavItem navSize={navSize} icon={FiFileText} title="Contas Analítico" />
                <NavItem navSize={navSize} icon={HiOutlineDocumentSearch} title="Circuitos Cadastrados" />
                <Divider display={navSize == "small" ? "none" : "flex"} borderColor={'gray.400'} />
                <NavItem navSize={navSize} icon={IoTodayOutline} title="Cadastrar Reunião" />
                <NavItem navSize={navSize} icon={FiUser} title="Consultar Servidor" />
                <NavItem navSize={navSize} icon={IoPeopleOutline} title="Equipe Diretiva" />
                <Divider display={navSize == "small" ? "none" : "flex"} borderColor={'gray.400'} />
                <NavItem navSize={navSize} icon={IoPersonCircleOutline} title="Administrar Perfil" />
                <NavItem navSize={navSize} icon={BsPersonAdd} title="Novo Usuário" />
                <NavItem navSize={navSize} icon={FiGlobe} title="Monitorar Rede" />
                <NavItem navSize={navSize} icon={BsPersonVcard} title="Monitorar Rede" />
                <NavItem navSize={navSize} icon={IoKeyOutline} title="Lista de Credenciais" />
            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={6}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
