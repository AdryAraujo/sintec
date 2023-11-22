import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import styles from "../styles/Container.module.css";
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FiSkipBack } from 'react-icons/fi';
import Sidebar from '../components/Navbar/Sidebar';
import Rotas from '../components/Rotas';
import TableDeta from '../components/TableDeta';
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCpuFill, BsEmojiAngryFill } from "react-icons/bs";
import { NOMEM } from "dns";

export default function Detalhamento() {
    return (
        <Flex
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex
                className={styles.containerPrincipal}
            >
                <Rotas />
                <Flex
                    paddingInline={'15px'}
                    className={styles.containerTable}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Cadastro de Fornecedores</Text>
                    <Flex
                        mt={3}
                        justifyContent={'center'}
                        alignItems={'center'}
                        display={'flex'}>
                        <FormControl isRequired mr={2} >
                            <FormLabel mb={0}>Nome do Fornecedor:</FormLabel>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='text'
                                placeholder='Digite seu nome aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4}
                            />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>CNPJ:</FormLabel>
                            <Input type='number'
                                variant='filled'
                                placeholder='Filled'
                                placeholder='Digite seu CNPJ aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4}
                            />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>N. Inst. Estadual:</FormLabel>
                            <Input
                                type='number'
                                variant='filled'
                                placeholder='Filled'
                                placeholder='Digite aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4}
                            />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>Email:</FormLabel>
                            <InputGroup >
                                <Input
                                    variant='filled'
                                    placeholder='Filled'
                                    type='email'
                                    placeholder='Digite seu email aqui!'
                                    backgroundColor='#ffffff'
                                    borderColor='gray.200'
                                    pr='4.5rem'
                                    width='full'
                                    mb={4}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mb={0}>Telefone:</FormLabel>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='number'
                                placeholder='Digite seu telefone aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4}
                            />
                        </FormControl>
                    </Flex>
                    <Flex
                        mt={3}
                        justifyContent={'center'}
                        alignItems={'center'}
                        display={'flex'}>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>Nome Representante:</FormLabel>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='text'
                                placeholder='Digite o nome do Representante aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4} />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>CPF:</FormLabel>
                            <Input type='number'
                                variant='filled'
                                placeholder='Filled'
                                placeholder='Digite seu CPF aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4}
                                mr={2} />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>Celular:</FormLabel>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='number'
                                placeholder='Digite seu celular aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4} />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>CEP:</FormLabel>
                            <Input type='number'
                                variant='filled'
                                placeholder='Filled'
                                placeholder='Digite seu CEP aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4} />
                        </FormControl>
                        <FormControl isRequired >
                            <FormLabel mb={0}>Logradouro:</FormLabel>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='text'
                                placeholder='Digite seu logradouro aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4} />
                        </FormControl>
                    </Flex>
                    <Button
                        leftIcon={<IoIosAddCircleOutline />}
                        color='blue.600'
                        width='212px'
                        height='32px'
                        variant='outline'
                        colorScheme='blue.600'
                        alignSelf={'center'}
                    >Cadastrar</Button>
                    <TableDeta />
                    <Button
                        leftIcon={<FiSkipBack />}
                        color='blue.600'
                        width='212px'
                        height='32px'
                        variant='outline'
                        mb={3}
                        colorScheme='blue.600'
                        mt={7}
                        alignSelf={'center'}
                    >Voltar</Button>
                </Flex>
            </Flex>
        </Flex>

    )
}

