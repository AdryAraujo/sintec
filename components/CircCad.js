import { Center, Flex, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import TableCirc from './TableCirc';
import FiltroCirc from './FiltroCirc';
import Sidebar from './Sidebar';
import Rotas from './Rotas';




export default function CircCad() {
    return (
        <Flex
            border='1px solid #E2E8F0'
            borderRadius={'12px'}
            width={'95%'}
            height={'95%'}
            // justifyContent={'rigth'}
            alignItems={'center'}
            display={'flex'}
            marginInline={'50px'}
            marginTop={'15px'}
        >
            <Sidebar />
            <Flex
                // border='1px solid black'
                borderRadius={'12px'}
                width={'100%'}
                height={'800px'}
                flexDirection={'column'}
                // paddingRight={'20px'}
                marginInline={'35px'}
            >
                <Rotas />
                <Flex
                    border='1px solid #E2E8F0'
                    borderRadius={'12px'}
                    height={'740px'}
                    backgroundColor={'cyan.100'}
                    flexDirection={'column'}

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