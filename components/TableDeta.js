import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import styles from '../styles/Table.module.css'
export default function TableDeta() {
    return (
        <TableContainer
            width={'full'}
            // marginTop={'20px'}
            // marginRight={'15px'}
            // backgroundColor={'white'}
            // borderRadius={'12px'}
            className={styles.containerTable}
            >
            <Table>
                <Thead>
                    <Tr>
                        <Th>Contrato</Th>
                        <Th>Mês Cobrança</Th>
                        <Th>Valor</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>185004501136</Td>
                        <Td>10/2023</Td>
                        <Td>61.62</Td>
                    </Tr>
                    <Tr>
                        <Td>185004501136</Td>
                        <Td>10/2023</Td>
                        <Td>61.62</Td>
                    </Tr>
                    <Tr>
                        <Td>185004501136</Td>
                        <Td>10/2023</Td>
                        <Td>61.62</Td>
                    </Tr>
                    <Tr>
                        <Td>185004501136</Td>
                        <Td>10/2023</Td>
                        <Td>61.62</Td>
                    </Tr>
                    <Tr>
                        <Td>185004501136</Td>
                        <Td>10/2023</Td>
                        <Td>61.62</Td>
                    </Tr>
                    <Tr>
                        <Td>185004501136</Td>
                        <Td>10/2023</Td>
                        <Td>61.62</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}