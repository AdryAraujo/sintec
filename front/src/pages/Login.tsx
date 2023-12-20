import { useAuth } from "@/contexts/AuthContext";
import { Button, Flex, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Link } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useContext, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { HiEye, HiEyeOff, HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import LogoLogin from "../assets/logoLogin.svg";
import Logo from "../assets/logo_sintec.svg";
import styles from "../styles/Login.module.css";
import AuthContext from "@/contexts/AuthContext1";
import { useForm } from 'react-hook-form'


export default function Login() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const { register, handleSubmit } = useForm();
    const { login } = useContext(AuthContext)

    async function handleLogin(data) {
        await login(data)
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
                    <Flex>
                        <form className={styles.containerInputs}>
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
                                    {...register('login')}
                                />
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
                                    {...register('password')}
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

                            >
                                Login
                            </Button>
                        </form>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}