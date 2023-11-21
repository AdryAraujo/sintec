import styles from "../styles/Cadastro.module.css";
import React from 'react';
import LogoLogin from "../assets/logoLogin.svg"
import Image from "next/image";
import Logo from "../assets/logo_sintec.svg"
import { Button, ButtonGroup, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Link, Stack } from "@chakra-ui/react";
import { HiOutlineMail, HiMiniMoon } from "react-icons/hi";
import { IoKeyOutline, IoMoon } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { Router } from "next/router";


export default function Login() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    // const handleLogin = () => {
    //     Router.push('/CircCad');
    // };

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image alt="" src={LogoLogin} />
            </div>
            {/* <IoMoon className={styles.icon}/> */}
            <div className={styles.form_login}>
                <Image className={styles.logoSintec1Icon} alt="" src={Logo} />
                <div className={styles.containerInputs}>
                    <FormControl isRequired >
                        <FormLabel mb={0}>Nome Completo:</FormLabel>
                        <Input type='number'
                            variant='filled'
                            placeholder='Filled'
                            type='tel'
                            placeholder='Digite seu email aqui!'
                            backgroundColor='#ffffff'
                            borderColor='gray.200'
                            width='450px'
                            marginBottom='20px'
                            mb={4} />
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel mb={0}>Login da Rede:</FormLabel>
                        <Input type='number'
                            variant='filled'
                            placeholder='Filled'
                            type='tel'
                            placeholder='Digite seu email aqui!'
                            backgroundColor='#ffffff'
                            borderColor='gray.200'
                            width='450px'
                            marginBottom='20px'
                            mb={4} />
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel mb={0}>Senha:</FormLabel>
                        <InputGroup mb={6}>
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
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Link href="/CircCad" alignSelf={'center'}>
                        <Button
                            as="a"
                            leftIcon={<FiLogIn />}
                            backgroundColor='cyan.300'
                            variant='solid'
                            color='white'
                            width='212px'
                            height='32px'
                        // onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}