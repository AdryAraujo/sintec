import Sidebar from '@/components/Navbar/Sidebar';
import { Box, Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import { IoIosEye } from 'react-icons/io';
import DataOi from '../components/Importacao/DataOi';
import Rotas from '../components/Routes/RotasCirc';

export default function ImportOi() {
    return (
        <Flex
        className={'containerTotal'}
    >
        <Sidebar />
        <Box
            className={'containerPrincipal'}
        >
            <Rotas />
            <Flex
                className={'containerTable'}
            >
                <Text
                    alignSelf={'center'}
                    margin={5}
                    fontSize='4xl'>Circuitos Cadastrados</Text>
                <Flex>
                    <DataOi />
                </Flex>
            </Flex>
        </Box>
    </Flex>
    );
};


