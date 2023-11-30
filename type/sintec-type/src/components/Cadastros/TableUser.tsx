import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Table.module.css'

export default function TableUser() {
    return (
        <Box className={styles.containerTable}
            height={'70%'}
            overflowY="auto"
            overflowX="auto"
            marginTop={'20px'}
            marginRight={'15px'}
            borderRadius={'12px'}
            width={'full'}
        >
            <TableContainer
                className={styles.tabela}
            >
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Login da Rede</Th>
                            <Th >Ativo</Th>
                            <Th>Perfil do Usuário</Th>
                            <Th>Manutenção</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        <Tr>
                            <Td>Adryelle Araujo da Silva</Td>
                            <Td>Adryelles</Td>
                            <Td>ativo</Td>
                            <Td>Estagiario</Td>
                            <Td >icone</Td>
                        </Tr>
                        
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>

    )
}