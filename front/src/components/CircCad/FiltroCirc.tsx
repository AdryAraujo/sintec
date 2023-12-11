import { Button, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

export default function FiltroCirc() {
    return (

        <Flex
            className={'containerFiltro'}
            flexDir="column"
        >
            <FormControl>
                <FormLabel mb={0} mt={4}>Fornecedor:</FormLabel>
                <Select placeholder='Selecione uma opção' mb={3}>
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Diretoria:</FormLabel>
                <Input type='text' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Contrato:</FormLabel>
                <Input type='number' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Nome Unidade:</FormLabel>
                <Input type='email' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel mb={0}>Circuito:</FormLabel>
                <Input type='number' mb={55}/>
            </FormControl>
            <Button
                leftIcon={<IoSearch />}
                color='cyan.300'
                width='212px'
                height='32px'
                variant='outline'
                mb={3}
                colorScheme='cyan.300'
                mt={15}
            >Filtrar</Button>
            <Button
                leftIcon={<FiX />}
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