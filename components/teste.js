import { useCallback } from "react";
import styles from "../styles/index.module.css";
import LoginIcon from '../assets/icons/LoginIcons';
import SomIcon from "../assets/icons/SomIcons";
import Logo from "../assets/logo_sintec.svg"
import Image from "next/image";
import Som from '../assets/som.svg'
import LogoLogin from "../assets/logoLogin.svg"

const Login = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Pagina_inicial" to the project
  }, []);

  return (
    <div className={styles.login}>
        <Image className={styles.logoIcon} alt="" src={LogoLogin} />
        <Image className={styles.somIcon} alt="" src={Som} />
        {/* <SomIcon className={styles.teste}/> */}
      <div className={styles.cardLogin}>
        <div className={styles.card} />
        <div className={styles.esqueceuSuaSenha}>Esqueceu sua senha?</div>
        <div className={styles.inputgroup}>
          <div className={styles.input}>
            <div className={styles.placeholder}>ola</div>
          </div>
          <div className={styles.inputleftelement}>

          </div>
        </div>
        <div className={styles.inputgroup1}>
          <div className={styles.input}>
            <div className={styles.placeholder}>Placeholder</div>
          </div>
          <div className={styles.inputleftelement}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <LoginIcon/>
          <b className={styles.children}>Login</b>
        </div>
        <Image
          className={styles.logoSintec1Icon}
          alt=""
          src={Logo}
        />
      </div>
    </div>
  );
};

export default Login;
