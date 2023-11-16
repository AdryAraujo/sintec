import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import FiltroAna from '../components/ContAna/FiltroAna';
import Rotas from '../components/Rotas';
import Sidebar from '../components/Navbar/Sidebar';
import TableAna from '../components/ContAna/TableAna';
import styles from '../styles/CircCad.module.css'


export default function ContAna() {
    return (
        <Flex
            // border='1px solid #E2E8F0'
            // borderRadius={'12px'}
            // width={'95%'}
            // height={'95%'}
            // alignItems={'center'}
            // display={'flex'}
            // marginInline={'50px'}
            // marginTop={'15px'}
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex
                // borderRadius={'12px'}
                // width={'100%'}
                // height={'800px'}
                // flexDirection={'column'}
                // marginInline={'35px'}
                className={styles.containerPrincipal}
            >
                <Rotas />
                <Flex
                    // border='1px solid #E2E8F0'
                    // borderRadius={'12px'}
                    // height={'740px'}
                    // backgroundColor={'cyan.100'}
                    // flexDirection={'column'}
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