import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../styles/CircCad.module.css";

const CircCad = () => {
  const router = useRouter();

  const onBreadcrumbLinkTextClick = useCallback(() => {
    // Please sync "Pagina_inicial" to the project
  }, []);

  const onConsultarCircCadIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCkChevronRightIconClick = useCallback(() => {
    // Please sync "Circ_cad_drawer" to the project
  }, []);

  return (
    <div className={styles.circCad}>
      <div className={styles.containerPrincipal}>
        <img className={styles.xsIcon} alt="" src="/xs.svg" />
        <img className={styles.ckmoonIcon} alt="" src="/ckmoon.svg" />
        <div className={styles.filtroLateral}>
          <div className={styles.base} />
          <div className={styles.limparBtn}>
            <img className={styles.leftIcon} alt="" src="/lefticon.svg" />
            <div className={styles.children}>Limpar</div>
            <img className={styles.rightIcon} alt="" src="/righticon.svg" />
          </div>
          <div className={styles.circuito}>
            <div className={styles.input}>
              <div className={styles.placeholder}>Placeholder</div>
            </div>
            <div className={styles.sm}>Circuito</div>
          </div>
          <div className={styles.nomeUni}>
            <div className={styles.input1}>
              <div className={styles.placeholder}>Placeholder</div>
            </div>
            <div className={styles.sm1}>Nome Unidade</div>
          </div>
          <div className={styles.diretoria}>
            <div className={styles.input2}>
              <div className={styles.placeholder}>Placeholder</div>
            </div>
            <div className={styles.sm2}>Diretoria</div>
          </div>
          <div className={styles.fornecedor}>
            <div className={styles.select}>
              <div className={styles.placeholder3}>Hello</div>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <div className={styles.sm3}>Fornecedor</div>
          </div>
          <div className={styles.contrato}>
            <div className={styles.input1}>
              <div className={styles.placeholder}>Placeholder</div>
            </div>
            <div className={styles.sm4}>Contrato</div>
          </div>
          <div className={styles.filtrarBtn}>
            <img className={styles.leftIcon1} alt="" src="/lefticon1.svg" />
            <div className={styles.children}>Filtrar</div>
            <img className={styles.rightIcon} alt="" src="/righticon1.svg" />
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.dre}>
            <div className={styles.head}>
              <b className={styles.dre1}>DRE</b>
              <div className={styles.border} />
            </div>
            <div className={styles.row}>
              <div className={styles.segunAdebayo}>DAF</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.markChandler}>DAF</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.lazarNikolov}>DAF</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.javierAlaves}>DAF</div>
            </div>
          </div>
          <div className={styles.cidade}>
            <div className={styles.head1}>
              <b className={styles.cidade1}>Cidade</b>
              <div className={styles.border} />
            </div>
            <div className={styles.row}>
              <div className={styles.founderOfChakra}>Aracaju</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer}>Aracaju</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer}>Aracaju</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer}>Aracaju</div>
            </div>
          </div>
          <div className={styles.nomeUnidade}>
            <div className={styles.head1}>
              <b className={styles.nomeUnidade1}>Nome Unidade</b>
              <div className={styles.border8} />
            </div>
            <div className={styles.row}>
              <div className={styles.founderOfChakra1}>
                Núcleo de Segurança Escolar
              </div>
              <div className={styles.border8} />
            </div>
            <div className={styles.row1}>
              <div className={styles.markchakraUicom}>
                Núcleo de Segurança Escolar
              </div>
              <div className={styles.border8} />
            </div>
            <div className={styles.row1}>
              <div className={styles.markchakraUicom}>
                Núcleo de Segurança Escolar
              </div>
              <div className={styles.border8} />
            </div>
            <div className={styles.row1}>
              <div className={styles.designer1}>
                Núcleo de Segurança Escolar
              </div>
            </div>
          </div>
          <div className={styles.designacao}>
            <div className={styles.head1}>
              <b className={styles.designao}>Designação</b>
              <div className={styles.border} />
            </div>
            <div className={styles.row}>
              <div className={styles.founderOfChakra2}>12345678</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer2}>12345678</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer2}>12345678</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.designer2}>12345678</div>
            </div>
          </div>
          <div className={styles.contrato1}>
            <div className={styles.head1}>
              <b className={styles.contrato2}>Contrato</b>
              <div className={styles.border} />
            </div>
            <div className={styles.row}>
              <div className={styles.founderOfChakra3}>123456789123</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer3}>123456789123</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.devrel3}>123456789123</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer3}>123456789123</div>
            </div>
          </div>
          <div className={styles.ultRef}>
            <div className={styles.head1}>
              <b className={styles.ultRef1}>Ult. Ref.</b>
              <div className={styles.border} />
            </div>
            <div className={styles.row}>
              <div className={styles.founderOfChakra4}>09/2023</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.developer4}>09/2023</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.devrel4}>09/2023</div>
              <div className={styles.border} />
            </div>
            <div className={styles.row1}>
              <div className={styles.designer4}>09/2023</div>
            </div>
          </div>
          <div className={styles.endereco}>
            <div className={styles.head1}>
              <b className={styles.endereo}>Endereço</b>
              <div className={styles.border8} />
            </div>
            <div className={styles.row}>
              <div className={styles.sagechakraUicom}>
                RUA HUMBERTO PINTO 00000 , GRAGERU
              </div>
              <div className={styles.border8} />
            </div>
            <div className={styles.row1}>
              <div className={styles.markchakraUicom}>
                RUA HUMBERTO PINTO 00000 , GRAGERU
              </div>
              <div className={styles.border8} />
            </div>
            <div className={styles.row1}>
              <div className={styles.markchakraUicom}>
                RUA HUMBERTO PINTO 00000 , GRAGERU
              </div>
              <div className={styles.border8} />
            </div>
            <div className={styles.row1}>
              <div className={styles.javichakraUicom}>
                RUA HUMBERTO PINTO 00000 , GRAGERU
              </div>
            </div>
          </div>
        </div>
        <div className={styles.breadcrumb}>
          <div className={styles.breadcrumbitem}>
            <div
              className={styles.breadcrumblink}
              onClick={onBreadcrumbLinkTextClick}
            >
              Página Inicial
            </div>
            <div className={styles.breadcrumbseparator}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
          <div className={styles.breadcrumbitem}>
            <div className={styles.text}>Circuitos Cadastrados</div>
            <div className={styles.breadcrumbseparator1}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className={styles.breadcrumbitem2}>
            <div className={styles.text}>Link 3</div>
            <div className={styles.breadcrumbseparator}>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </div>
          </div>
          <div className={styles.breadcrumbitem2}>
            <div className={styles.text}>Link 4</div>
            <div className={styles.breadcrumbseparator}>
              <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
            </div>
          </div>
          <div className={styles.breadcrumbitem}>
            <div className={styles.breadcrumblink4}>Curent</div>
            <div className={styles.breadcrumbseparator4}>
              <div className={styles.text}>/</div>
            </div>
          </div>
        </div>
        <div className={styles.circuitosCadastrados}>Circuitos Cadastrados</div>
      </div>
      <div className={styles.barraLateral}>
        <img
          className={styles.barraLateralChild}
          alt=""
          src="/rectangle-1.svg"
        />
        <img className={styles.listUsuIcon} alt="" src="/list-usu.svg" />
        <img className={styles.listUsuIcon1} alt="" src="/list-usu1.svg" />
        <img className={styles.moniRedeIcon} alt="" src="/moni-rede.svg" />
        <img className={styles.cadNovoUsuIcon} alt="" src="/cad-novo-usu.svg" />
        <img className={styles.admPerfIcon} alt="" src="/adm-perf.svg" />
        <img
          className={styles.consultarCircCadIcon}
          alt=""
          src="/consultar-circ-cad.svg"
          onClick={onConsultarCircCadIconClick}
        />
        <img
          className={styles.consultarContAnaIcon}
          alt=""
          src="/consultar-cont-ana.svg"
        />
        <img
          className={styles.consultarContDetIcon}
          alt=""
          src="/consultar-cont-det.svg"
        />
        <img
          className={styles.importarContasIcon}
          alt=""
          src="/importar-contas.svg"
        />
        <img
          className={styles.consultarEqDireIcon}
          alt=""
          src="/consultar-eq-dire.svg"
        />
        <img
          className={styles.cadastrarReunioIcon}
          alt=""
          src="/cadastrar-reunio.svg"
        />
        <img
          className={styles.consultarServidorIcon}
          alt=""
          src="/consultar-servidor.svg"
        />
        <div className={styles.divider4}>
          <div className={styles.divider} />
        </div>
        <div className={styles.divider3}>
          <div className={styles.divider} />
        </div>
        <div className={styles.divider2}>
          <div className={styles.divider} />
        </div>
        <img className={styles.mdexittoappIcon} alt="" src="/mdexittoapp.svg" />
        <img
          className={styles.ckchevronrightIcon}
          alt=""
          src="/ckchevronright.svg"
          onClick={onCkChevronRightIconClick}
        />
      </div>
    </div>
  );
};

export default CircCad;
