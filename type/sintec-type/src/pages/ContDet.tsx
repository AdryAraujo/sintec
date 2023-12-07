import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import TableDet from '../components/ContDet/TableDet';
import Sidebar from '../components/Navbar/Sidebar';
import FiltroDet from '../components/ContDet/FiltroDet';
import RotasDet from '@/components/Routes/RotasDet';

export default function ContDet() {
    return (
        <Flex            
            className={'containerTotal'}
        >
            <Sidebar />
            <Flex               
                className={'containerPrincipal'}
            >
                <RotasDet />
                <Flex                    
                    className={'containerTable'}
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