import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export default function TableForn() {
    return (
        <Box className={'containerTabela'}
            height={'70%'}
            overflowY="auto"
            overflowX="auto"
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
                            <Th>Nome Fornecedor</Th>
                            <Th isNumeric>CNPJ</Th>
                            <Th isNumeric>N. Inst. Estadual</Th>
                            <Th>Email</Th>
                            <Th isNumeric>Telefone</Th>
                            <Th>Nome Representante</Th>
                            <Th isNumeric>CPF</Th>
                            <Th isNumeric>Celular</Th>
                            <Th isNumeric>CEP</Th>
                            <Th>Logradouro</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                        <Tr>
                            <Td>Bk</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td isNumeric>12345678910</Td>
                            <Td>fornecedor@gmail.com</Td>
                            <Td isNumeric>32453245</Td>
                            <Td >Representante</Td>
                            <Td isNumeric>00000000000</Td>
                            <Td isNumeric>79999999999</Td>
                            <Td isNumeric>49087087</Td>
                            <Td >Rua ficticia, bairro centro</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>

    )
}