import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import FiltroCirc from '../components/CircCad/FiltroCirc';
import Rotas from '../components/Rotas';
import Sidebar from '../components/Navbar/Sidebar';
import TableCirc from '../components/CircCad/TableCirc';
import styles from '../styles/CircCad.module.css'

export default function CircCad() {
    return (
        <Flex
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex
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
            </Flex>
        </Flex>

    )
}