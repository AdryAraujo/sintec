import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FiSkipBack } from 'react-icons/fi';
import Sidebar from '../components/Navbar/Sidebar';
import TableUser from '../components/Cadastros/TableUser';
import { IoIosAddCircleOutline } from "react-icons/io";
import RotasUser from "@/components/Routes/RotasUser";

export default function CadastroUser() {
    return (
        <Flex
            className={'containerTotal'}
        >
            <Sidebar />
            <Flex
                className={'containerPrincipal'}
            >
                <RotasUser />
                <Flex
                    paddingInline={'15px'}
                    className={'containerTable'}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Cadastro de Usuários</Text>
                    <Flex
                        mt={3}
                        justifyContent={'center'}
                        alignItems={'center'}
                        display={'flex'}>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>Nome Completo:</FormLabel>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='text'
                                placeholder='Digite seu nome aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4} />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>Login da Rede:</FormLabel>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='text'
                                placeholder='Digite seu login aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='full'
                                marginBottom='20px'
                                mb={4} />
                        </FormControl>
                        <FormControl isRequired mr={2}>
                            <FormLabel mb={0}>Senha:</FormLabel>
                            <InputGroup >
                                <Input
                                    variant='filled'
                                    placeholder='Filled'
                                    type='password'
                                    placeholder='Digite sua senha aqui!'
                                    backgroundColor='#ffffff'
                                    borderColor='gray.200'
                                    pr='4.5rem'
                                    type={'password'}
                                    width='full'
                                    mb={4}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired >
                            <FormLabel mb={0}>Perfil:</FormLabel>
                            <Select 
                            placeholder='Selecione uma opção'
                            backgroundColor='#ffffff'
                            borderColor='gray.200' 
                            width='full'
                            mb={4}>
                                <option>Estagiário</option>
                                <option>Administrador</option>
                                <option>Operador</option>
                            </Select>
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
                    <TableUser />
                </Flex>
            </Flex>
        </Flex>

    )
}

// export default function Login() {

//     const [show, setShow] = React.useState(false)
//     const handleClick = () => setShow(!show)
//     // const handleLogin = () => {
//     //     Router.push('/CircCad');
//     // };

//     return (
//         <div className={container}>
//             <div className={logo}>
//                 <Image alt="" src={LogoLogin} />
//             </div>
//             {/* <IoMoon className={icon}/> */}
//             <div className={form_login}>
//                 <Image className={logoSintec1Icon} alt="" src={Logo} />
//                 <div className={containerInputs}>
//                     <FormControl isRequired >
//                         <FormLabel mb={0}>Nome Completo:</FormLabel>
//                         <Input type='number'
//                             variant='filled'
//                             placeholder='Filled'
//                             type='tel'
//                             placeholder='Digite seu email aqui!'
//                             backgroundColor='#ffffff'
//                             borderColor='gray.200'
//                             width='450px'
//                             marginBottom='20px'
//                             mb={4} />
//                     </FormControl>
//                     <FormControl isRequired >
//                         <FormLabel mb={0}>Login da Rede:</FormLabel>
//                         <Input type='number'
//                             variant='filled'
//                             placeholder='Filled'
//                             type='tel'
//                             placeholder='Digite seu email aqui!'
//                             backgroundColor='#ffffff'
//                             borderColor='gray.200'
//                             width='450px'
//                             marginBottom='20px'
//                             mb={4} />
//                     </FormControl>
//                     <FormControl isRequired >
//                         <FormLabel mb={0}>Senha:</FormLabel>
//                         <InputGroup mb={6}>
//                             <Input
//                                 variant='filled'
//                                 placeholder='Filled'
//                                 type='password'
//                                 placeholder='Digite sua senha aqui!'
//                                 backgroundColor='#ffffff'
//                                 borderColor='gray.200'
//                                 pr='4.5rem'
//                                 type={show ? 'text' : 'password'}
//                                 width='450px'
//                             />
//                             <InputRightElement width='4.5rem'>
//                                 <Button h='1.75rem' size='sm' onClick={handleClick}>
//                                     {show ? 'Hide' : 'Show'}
//                                 </Button>
//                             </InputRightElement>
//                         </InputGroup>
//                     </FormControl>
//                     <Link href="/CircCad" alignSelf={'center'}>
//                         <Button
//                             as="a"
//                             leftIcon={<FiLogIn />}
//                             backgroundColor='cyan.300'
//                             variant='solid'
//                             color='white'
//                             width='212px'
//                             height='32px'
//                         // onClick={handleLogin}
//                         >
//                             Login
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }