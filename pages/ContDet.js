import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import TableDet from '../components/ContDet/TableDet';
import Sidebar from '../components/Navbar/Sidebar';
import Rotas from '../components/Rotas';
import FiltroDet from '../components/ContDet/FiltroDet';
import styles from '../styles/CircCad.module.css'

export default function ContDet() {
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