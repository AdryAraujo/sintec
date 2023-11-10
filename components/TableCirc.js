import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
export default function TableCirc() {
    return (
        <TableContainer
        width={'full'}
        marginTop={'20px'}
        marginRight={'15px'}
        backgroundColor={'white'}
        borderRadius={'12px'}
        >
            <Table variant='simple' size='sm'>
                <Thead>
                    <Tr>
                        <Th>DRE</Th>
                        <Th>Cidade</Th>
                        <Th >Unidade</Th>
                        <Th >Designação</Th>
                        <Th >Contrato</Th>
                        <Th isNumeric>Ult. Ref</Th>
                        <Th>Endereço</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td isNumeric>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                    <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td isNumeric>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                    <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td isNumeric>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}