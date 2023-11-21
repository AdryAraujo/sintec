import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Table.module.css'
export default function TableDet() {
    return (
        <TableContainer
            // width={'full'}
            // marginTop={'20px'}
            // marginRight={'15px'}
            // backgroundColor={'white'}
            // borderRadius={'12px'}
            className={styles.containerTable}
        >
            <Table>
                <Thead>
                    <Tr>
                        <Th>DRE</Th>
                        <Th>Cidade</Th>
                        <Th isNumeric>Circuito</Th>
                        <Th >Nome Unidade</Th>
                        <Th isNumeric>Data/Conta</Th>
                        <Th isNumeric>Contrato</Th>
                        <Th isNumeric>Valor</Th>
                        <Th isNumeric>Velocidade</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td >DAF</Td>
                        <Td>Aracaju</Td>
                        <Td isNumeric>31792679</Td>
                        <Td>Núcleo de Segurança Escolar</Td>
                        <Td isNumeric>10/2023</Td>
                        <Td isNumeric>185004501136</Td>
                        <Td isNumeric>R$ 61,62</Td>
                        <Td isNumeric>100mb/s</Td>
                    </Tr>
                    <Tr>
                        <Td >DAF</Td>
                        <Td>Aracaju</Td>
                        <Td isNumeric>31792679</Td>
                        <Td>Núcleo de Segurança Escolar</Td>
                        <Td isNumeric>10/2023</Td>
                        <Td isNumeric>185004501136</Td>
                        <Td isNumeric>R$ 61,62</Td>
                        <Td isNumeric>100mb/s</Td>
                    </Tr>
                    <Tr>
                        <Td >DAF</Td>
                        <Td>Aracaju</Td>
                        <Td isNumeric>31792679</Td>
                        <Td>Núcleo de Segurança Escolar</Td>
                        <Td isNumeric>10/2023</Td>
                        <Td isNumeric>185004501136</Td>
                        <Td isNumeric>R$ 61,62</Td>
                        <Td isNumeric>100mb/s</Td>
                    </Tr>
                    <Tr>
                        <Td >DAF</Td>
                        <Td>Aracaju</Td>
                        <Td isNumeric>31792679</Td>
                        <Td>Núcleo de Segurança Escolar</Td>
                        <Td isNumeric>10/2023</Td>
                        <Td isNumeric>185004501136</Td>
                        <Td isNumeric>R$ 61,62</Td>
                        <Td isNumeric>100mb/s</Td>
                    </Tr>
                    <Tr>
                        <Td >DAF</Td>
                        <Td>Aracaju</Td>
                        <Td isNumeric>31792679</Td>
                        <Td>Núcleo de Segurança Escolar</Td>
                        <Td isNumeric>10/2023</Td>
                        <Td isNumeric>185004501136</Td>
                        <Td isNumeric>R$ 61,62</Td>
                        <Td isNumeric>100mb/s</Td>
                    </Tr>
                   
                </Tbody>
            </Table>
        </TableContainer>
    )
}