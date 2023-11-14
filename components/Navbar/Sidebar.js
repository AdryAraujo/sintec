import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsPersonAdd, BsPersonVcard } from "react-icons/bs"
import { FiDownload, FiFileText, FiGlobe, FiHome, FiMenu, FiUser } from 'react-icons/fi'
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import { IoKeyOutline, IoPeopleOutline, IoPersonCircleOutline, IoReceiptOutline, IoTodayOutline } from 'react-icons/io5'
import { IoIosLogOut } from "react-icons/io";
import NavItem from './NavItem'
import Link from 'next/link'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            // pos="sticky"
            // left="5"
            h="100%"
            // marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "12px" : "12px"}
            w={navSize == "small" ? "75px" : "25%"}
            flexDir="column"
            // justifyContent="space-between"
            backgroundColor='cyan.100'
        >
            <Flex
                // p="5%"
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
                <NavItem navSize={navSize} icon={FiHome} title="Home" description="This is the description for the dashboard." href={''} />
                <Divider display={navSize == "small" ? "none" : "flex"} borderColor={'gray.400'} />
                <NavItem navSize={navSize} icon={FiDownload} title="Importar Contas" href={'/ImportCont'} _hover={{ background: '#fff' }} />
                <NavItem navSize={navSize} icon={IoReceiptOutline} title="Contas Detalhados" href={'/ContDet'}  />
                <NavItem navSize={navSize} icon={FiFileText} title="Contas Analítico" href={'/ContAna'}  />
                <NavItem navSize={navSize} icon={HiOutlineDocumentSearch} title="Circuitos Cadastrados" href={'/CircCad'}  />
                <Divider display={navSize == "small" ? "none" : "flex"} borderColor={'gray.400'} />
                <NavItem navSize={navSize} icon={IoTodayOutline} title="Cadastrar Reunião" href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={FiUser} title="Consultar Servidor" href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={IoPeopleOutline} title="Equipe Diretiva" href={'/CircCad'}  />
                <Divider display={navSize == "small" ? "none" : "flex"} borderColor={'gray.400'} href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={IoPersonCircleOutline} title="Administrar Perfil" href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={BsPersonAdd} title="Novo Usuário" href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={FiGlobe} title="Monitorar Rede" href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={BsPersonVcard} title="Listar Todos Usuários" href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={IoKeyOutline} title="Lista de Credenciais" href={'/CircCad'}  />
                <Divider display={navSize == "small" ? "none" : "flex"} borderColor={'gray.400'} href={'/CircCad'}  />
                <NavItem navSize={navSize} icon={IoIosLogOut} title="Sair" href={'/CircCad'}  />

                
            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mt={2}
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
