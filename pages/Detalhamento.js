import { Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { FiSkipBack } from 'react-icons/fi';
import Sidebar from '../components/Navbar/Sidebar';
import Rotas from '../components/Rotas';
import TableDeta from '../components/TableDeta';
import styles from '../styles/CircCad.module.css'

export default function Detalhamento() {
    return (
        <Flex
            // border='1px solid #E2E8F0'
            // borderRadius={'12px'}
            // width={'95%'}
            // height={'95%'}
            // alignItems={'center'}
            // display={'flex'}
            // marginInline={'50px'}
            // marginTop={'15px'}
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex
                // borderRadius={'12px'}
                // width={'100%'}
                // height={'800px'}
                // flexDirection={'column'}
                // marginInline={'35px'}
                className={styles.containerPrincipal}
            >
                <Rotas />
                <Flex
                    // border='1px solid #E2E8F0'
                    // borderRadius={'12px'}
                    // height={'740px'}
                    // backgroundColor={'cyan.100'}
                    // flexDirection={'column'}
                    paddingInline={'15px'}
                    className={styles.containerTable}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Detalhamento das Contas</Text>
                    <Flex
                        mt={3}>
                        <FormControl mr={3}>
                            <FormLabel>Designação:</FormLabel>
                            <Input type='text' borderColor={'black'} />
                        </FormControl>
                        <FormControl mr={3}>
                            <FormLabel>Descrição Resumida:</FormLabel>
                            <Input type='text' borderColor={'black'} />
                        </FormControl>
                        <FormControl mr={3}>
                            <FormLabel>Endereço IP Wan:</FormLabel>
                            <Input type='text' borderColor={'black'} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Endereço Unidade:</FormLabel>
                            <Input type='text' borderColor={'black'} />
                        </FormControl>
                    </Flex>
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