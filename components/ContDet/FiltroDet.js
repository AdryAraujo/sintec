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
                <FormLabel mt={3} padding={0} mb={0}>Fornecedor:</FormLabel>
                <Select placeholder='Selecione uma opção' mb={3}>
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Mês da Conta:</FormLabel>
                <Select placeholder='Selecione uma opção' mb={3}>
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Contrato:</FormLabel>
                <Input type='number' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Diretoria:</FormLabel>
                <Input type='text' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Nome Unidade:</FormLabel>
                <Input type='text' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Circuito:</FormLabel>
                <Input type='number' mb={25}/>
            </FormControl>
            <Button 
                    leftIcon={<IoSearch/>} 
                    color='cyan.300'
                    width='212px'
                    height='32px'
                    variant='outline'
                    mb={3}
                    colorScheme='cyan.300'
                    mt={2}
            >Filtrar</Button>
            <Button 
                    leftIcon={<FiX/>} 
                    color='red'
                    width='212px'
                    height='32px'
                    variant='outline'
                    mb={3}
                    colorScheme='red'
            >Limpar</Button>
        </Flex>
    )
}