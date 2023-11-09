import { Flex, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import TableCirc from './TableCirc';
import FiltroCirc from './FiltroCirc';




export default function CircCad() {
    return (
        <Flex
        >
            <FiltroCirc />
            <TableCirc />
        </Flex>

    )
}