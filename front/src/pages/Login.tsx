import styles from "../styles/Login.module.css";
import React from 'react';
import LogoLogin from "../assets/logoLogin.svg"
import Image from "next/image";
import Logo from "../assets/logo_sintec.svg"
import { Button, ButtonGroup, Input, InputGroup, InputLeftElement, Link, InputRightElement, Stack, Icon, Flex } from "@chakra-ui/react";
import { HiOutlineMail, HiEyeOff, HiEye } from "react-icons/hi";
import { IoKeyOutline, IoMoon } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { Router } from "next/router";
import { useRouter } from 'next/router';
import { useState } from "react";
import { login } from '../services/api';

export default function Login() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    // const handleLogin = () => {
    //     router.push('/CircCad');
    // };
   
    const [loginData, setLoginData] = useState({ login_rede: '', senha_rede: '' });

    const handleLogin = async () => {
        try {
            const response = await login(loginData.login_rede, loginData.senha_rede);
            // Armazenar o token retornado no armazenamento local
        } catch (error) {
            // Lidar com erros de autenticação
        }
    }
    }

    return (
        <Flex className={styles.container}>
            <Flex className={styles.containerLogo}>
                <Flex className={styles.logo}>
                    <Image alt="" src={LogoLogin} />
                </Flex>
                {/* <IoMoon className={styles.icon}/> */}
                <Flex className={styles.form_login}>
                    <Image src={Logo} />
                    <Flex className={styles.containerInputs}>
                        <InputGroup >
                            <InputLeftElement pointerEvents='none'>
                                <HiOutlineMail />
                            </InputLeftElement>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='tel'
                                placeholder='Digite seu email aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                width='450px'
                                marginBottom='20px'
                                value={loginData.login_rede} onChange={(e) => setLoginData({ ...loginData, login_rede: e.target.value })} />
                        </InputGroup>
                        <InputGroup size='md'>
                            <InputLeftElement pointerEvents='none'>
                                <IoKeyOutline />
                            </InputLeftElement>
                            <Input
                                variant='filled'
                                placeholder='Filled'
                                type='password'
                                placeholder='Digite sua senha aqui!'
                                backgroundColor='#ffffff'
                                borderColor='gray.200'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                width='450px'
                                value={loginData.senha_rede} onChange={(e) => setLoginData({ ...loginData, senha_rede: e.target.value })}
                            />
                            <InputRightElement width="2.8rem">
                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                    <Icon as={show ? HiEyeOff : HiEye} />
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Link className={styles.esqueceuSuaSenha} href={''}
                            color='#6750a4'
                            marginBottom='20px'
                        >Esqueceu sua senha?</Link>
                        <Button
                            leftIcon={<FiLogIn />}
                            backgroundColor='cyan.300'
                            variant='solid'
                            color='white'
                            width='212px'
                            height='32px'
                            alignSelf={'center'}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}