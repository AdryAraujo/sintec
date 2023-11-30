import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import FiltroCirc from '../components/CircCad/FiltroCirc';
import Rotas from '../components/Rotas';
import Sidebar from '../components/Navbar/Sidebar';
import TableCirc from '../components/CircCad/TableCirc';
import styles from '../styles/Container.module.css'

export default function CircCad() {
    const [navSize, changeNavSize] = useState<"small" | "large">("large");
    return (
        <Flex
            className={styles.containerTotal}
        >
            <Sidebar />
            <Box
                w={navSize === "small" ? "70%" : "95%"}
                className={styles.containerPrincipal}
            >
                <Rotas />
                <Flex
                
                    className={styles.containerTable}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Circuitos Cadastrados</Text>
                    <Flex>
                        <FiltroCirc />
                        <TableCirc />
                    </Flex>
                </Flex>
            </Box>
        </Flex>

    )
}