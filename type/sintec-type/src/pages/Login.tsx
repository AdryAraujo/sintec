import styles from "../styles/Login.module.css";
import React from 'react';
import LogoLogin from "../assets/logoLogin.svg"
import Image from "next/image";
import Logo from "../assets/logo_sintec.svg"
import { Button, ButtonGroup, Input, InputGroup, InputLeftElement, Link, InputRightElement, Stack, Icon } from "@chakra-ui/react";
import { HiOutlineMail, HiMiniMoon, HiEyeOff, HiEye } from "react-icons/hi";
import { IoKeyOutline, IoMoon } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { Router } from "next/router";
import { useRouter } from 'next/router';
import { useState } from "react";





export default function Login() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const handleLogin = () => {
        router.push('/CircCad');
    };

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image alt="" src={LogoLogin} />
            </div>
            {/* <IoMoon className={styles.icon}/> */}
            <div className={styles.form_login}>
                <Image className={styles.logoSintec1Icon} alt="" src={Logo} />
                <div className={styles.containerInputs}>
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
                            marginBottom='20px' />
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
                        onClick={handleLogin}
                        alignSelf={'center'}
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}