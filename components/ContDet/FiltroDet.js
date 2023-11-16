import { Button, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

export default function FiltroDet() {
    return (

        <Flex
            flexDir="column"
            width={'240px'}
            height={'600px'}
            padding={'12px'}
            border='1px solid cyan.100'
            borderRadius={'12px'}
            marginInline={'20px'}
            marginTop={'20px'}
            backgroundColor={'white'}
        >
            <FormControl>
                <FormLabel mt={3}>Fornecedor:</FormLabel>
                <Select placeholder='Selecione uma opção' mb={2}>
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Mês da Conta:</FormLabel>
                <Select placeholder='Selecione uma opção' mb={2}>
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Contrato:</FormLabel>
                <Input type='email' mb={2}/>
            </FormControl>
            <FormControl>
                <FormLabel>Diretoria:</FormLabel>
                <Input type='email' mb={2}/>
            </FormControl>
            <FormControl>
                <FormLabel>Nome Unidade:</FormLabel>
                <Input type='email' mb={2}/>
            </FormControl>
            <FormControl>
                <FormLabel>Circuito:</FormLabel>
                <Input type='email' mb={15}/>
            </FormControl>
            <Button 
                    leftIcon={<IoSearch/>} 
                    color='cyan.300'
                    width='212px'
                    height='32px'
                    variant='outline'
                    mb={2}
                    colorScheme='cyan.300'
                    mt={2}
            >Filtrar</Button>
            <Button 
                    leftIcon={<FiX/>} 
                    color='red'
                    width='212px'
                    height='32px'
                    variant='outline'
                    mb={2}
                    colorScheme='red'
            >Limpar</Button>

        </Flex>


    )
}