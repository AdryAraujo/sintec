import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import FiltroAna from '../components/ContAna/FiltroAna';
import Rotas from '../components/Routes/RotasCirc';
import Sidebar from '../components/Navbar/Sidebar';
import TableAna from '../components/ContAna/TableAna';
import styles from '../styles/Container.module.css'
import RotasAna from '@/components/Routes/RotasAna';


export default function ContAna() {
    return (
        <Flex
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex
                className={styles.containerPrincipal}
            >
                <RotasAna />
                <Flex
                    className={styles.containerTable}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Contas Analítico</Text>
                    <Flex>
                        <FiltroAna />
                        <TableAna />
                    </Flex>

                </Flex>
            </Flex>
        </Flex>

    )
}