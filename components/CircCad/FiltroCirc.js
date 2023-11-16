import { Button, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

export default function FiltroCirc() {
    return (

        <Flex
            flexDir="column"
            width={'240px'}
            height={'570px'}
            padding={'12px'}
            border='1px solid cyan.100'
            borderRadius={'12px'}
            marginInline={'20px'}
            marginTop={'20px'}
            backgroundColor={'white'}
        >
            <FormControl>
                <FormLabel mt={4}>Fornecedor:</FormLabel>
                <Select placeholder='Selecione uma opção' mb={3}>
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Diretoria:</FormLabel>
                <Input type='email' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel>Contrato:</FormLabel>
                <Input type='email' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel>Nome Unidade:</FormLabel>
                <Input type='email' mb={3}/>
            </FormControl>
            <FormControl>
                <FormLabel>Circuito:</FormLabel>
                <Input type='email' mb={30}/>
            </FormControl>
            {/* <Text></Text>
            <Input placeholder='Basic usage' mb={3} />
            <Text>Diretoria:</Text>
            <Input placeholder='Basic usage' mb={3} />
            <Text>Nome Unidade:</Text>
            <Input placeholder='Basic usage' mb={3} />
            <Text>Circuito:</Text>
            <Input placeholder='Basic usage' mb={50} /> */}
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