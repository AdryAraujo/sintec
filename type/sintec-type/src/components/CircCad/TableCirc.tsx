import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Table.module.css'

export default function TableCirc() {
    return (
        <TableContainer
            width={'full'}
            // marginTop={'20px'}
            // marginRight={'15px'}
            // backgroundColor={'white'}
            // borderRadius={'12px'}
            className={styles.containerTable}
            
        >
            <Table
            overflowX={'auto'}
            overflowY={'auto'}
            >
                <Thead>
                    <Tr>
                        <Th>DRE</Th>
                        <Th>Cidade</Th>
                        <Th >Unidade</Th>
                        <Th isNumeric>Designação</Th>
                        <Th isNumeric>Contrato</Th>
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
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                    <Tr>
                        <Td>DAF</Td>
                        <Td>Aracaju</Td>
                        <Td>Nucleo de Segurança Escolar</Td>
                        <Td isNumeric>12345678</Td>
                        <Td isNumeric>123456789123</Td>
                        <Td isNumeric>09/2023</Td>
                        <Td>Rua Humberto Pinto 000000, Grageru</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}