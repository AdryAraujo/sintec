import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export default function TableAna() {
    return (
        <Box className={'containerTabela'}
            maxH={'70%'}
            overflowY="auto" overflowX="auto"
            marginTop={'20px'}
            marginRight={'15px'}
            borderRadius={'12px'}
            width={'full'}
        >
            <TableContainer
                className={'tabela'}
            >
                <Table>
                    <Thead>
                        <Tr>
                            <Th >Mês Conta</Th>
                            <Th>Serviço Contrato</Th>
                            <Th >Contrato</Th>
                            <Th >Tipo Unidade</Th>
                            <Th >Valor</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td >10/2023</Td>
                            <Td>Telefonia Fixa</Td>
                            <Td >123456789123</Td>
                            <Td>Administrativo</Td>
                            <Td >12345678</Td>
                        </Tr>
                        <Tr>
                            <Td >10/2023</Td>
                            <Td>Telefonia Fixa</Td>
                            <Td >123456789123</Td>
                            <Td>Administrativo</Td>
                            <Td >12345678</Td>
                        </Tr>
                        <Tr>
                            <Td >10/2023</Td>
                            <Td>Telefonia Fixa</Td>
                            <Td >123456789123</Td>
                            <Td>Administrativo</Td>
                            <Td >12345678</Td>
                        </Tr>
                        <Tr>
                            <Td >10/2023</Td>
                            <Td>Telefonia Fixa</Td>
                            <Td >123456789123</Td>
                            <Td>Administrativo</Td>
                            <Td >12345678</Td>
                        </Tr>
                        <Tr>
                            <Td >10/2023</Td>
                            <Td>Telefonia Fixa</Td>
                            <Td >123456789123</Td>
                            <Td>Administrativo</Td>
                            <Td >12345678</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}