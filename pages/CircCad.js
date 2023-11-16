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
            // border='1px solid #E2E8F0'
            // borderRadius={'12px'}
            // width={'95%'}
            // height={'95%'}
            // justifyContent={'rigth'}
            // alignItems={'center'}
            // display={'flex'}
            // marginInline={'50px'}
            // marginTop={'15px'}
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex
                // border='1px solid black'
                // borderRadius={'12px'}
                // width={'100%'}
                // height={'800px'}
                // flexDirection={'column'}
                // paddingRight={'20px'}
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