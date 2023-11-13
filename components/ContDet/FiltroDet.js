import { Button, Flex, Input, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

export default function FiltroDet() {
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
            <Text mt={4}>Fornecedor:</Text>
            <Select placeholder='Select option' mb={3}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Text>Mês da Conta:</Text>
            <Select placeholder='Select option' mb={3}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Text>Contrato:</Text>
            <Input placeholder='Basic usage' mb={3} />
            <Text>Diretoria:</Text>
            <Input placeholder='Basic usage' mb={3} />
            <Text>Nome Unidade:</Text>
            <Input placeholder='Basic usage' mb={3} />
            <Text>Circuito:</Text>
            <Input placeholder='Basic usage' mb={30} />
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