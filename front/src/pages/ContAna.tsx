import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import FiltroAna from '../components/ContAna/FiltroAna';
import Sidebar from '../components/Navbar/Sidebar';
import TableAna from '../components/ContAna/TableAna';
import RotasAna from '@/components/Routes/RotasAna';


export default function ContAna() {
    return (
        <Flex
            className={'containerTotal'}
        >
            <Sidebar />
            <Flex
                className={'containerPrincipal'}
            >
                <RotasAna />
                <Flex
                    className={'containerTable'}
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