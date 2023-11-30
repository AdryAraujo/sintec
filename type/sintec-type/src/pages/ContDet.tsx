import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import TableDet from '../components/ContDet/TableDet';
import Sidebar from '../components/Navbar/Sidebar';
import Rotas from '../components/Routes/RotasCirc';
import FiltroDet from '../components/ContDet/FiltroDet';
import styles from '../styles/Container.module.css'
import RotasDet from '@/components/Routes/RotasDet';

export default function ContDet() {
    return (
        <Flex            
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex               
                className={styles.containerPrincipal}
            >
                <RotasDet />
                <Flex                    
                    className={styles.containerTable}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Contas Detalhado</Text>
                    <Flex>
                        <FiltroDet />
                        <TableDet />
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    )
}