import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import FiltroCirc from '../components/CircCad/FiltroCirc';
import RotasCirc from '../components/Routes/RotasCirc';
import Sidebar from '../components/Navbar/Sidebar';
import TableCirc from '../components/CircCad/TableCirc';

export default function CircCad() {
    const [navSize, changeNavSize] = useState<"small" | "large">("large");
    return (
        <Flex
            className={'containerTotal'}
        >
            <Sidebar />
            <Box
                w={navSize === "small" ? "70%" : "95%"}
                className={'containerPrincipal'}
            >
                <RotasCirc />
                <Flex
                
                    className={'containerTable'}
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