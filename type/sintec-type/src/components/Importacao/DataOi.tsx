import { useState } from 'react';
import Papa from 'papaparse';
import { Box, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => {
  const [dados, setDados] = useState<any[]>([]);

  const lerDadosArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      Papa.parse(arquivo, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          setDados(result.data);
        },
        error: (error) => {
          alert('Erro ao analisar o CSV:', error.message);
        },
      });
    }
  };
  return (
    <Box>
      <Input type='file' accept='.csv' onChange={lerDadosArquivo} />
        <Table size='sm' className={'tabela'}>
          <Thead>
            <Tr>
              <Th>Site</Th>
              <Th>Nome Cliente</Th>
              <Th>Finalidade</Th>
              <Th>Contrato</Th>
              <Th>Faturamento</Th>
              <Th>Fatura</Th>
              <Th>Nota Fiscal</Th>
              <Th>DDD</Th>
              <Th>Telefone</Th>
              <Th>Designação</Th>
              <Th>Valor a pagar</Th>
              <Th>LocalPT1</Th>
              <Th>Tipo Logradouro1</Th>
              <Th>Logradouro1</Th>
              <Th>Num Imovel1</Th>
              <Th>Bairro1</Th>
              <Th>Cep1</Th>
              <Th>Sigla UF1</Th>
              <Th>Local PT2</Th>
              <Th>Tipo Logradouro2</Th>
              <Th>Logradouro2</Th>
              <Th>Num Imovel2</Th>
              <Th>Bairro2</Th>
              <Th>Cep2</Th>
              <Th>Sigla UF2</Th>
              <Th>Prod Telefone</Th>
              <Th>Vel Circuito</Th>
              <Th>Num Pagina</Th>
              <Th>Num Linha</Th>
              <Th>Data Servico</Th>
              <Th>Cod Servico / Descricao Servico</Th>
              <Th>Degrau</Th>
              <Th>Tel Origem</Th>
              <Th>Selecao</Th>
              <Th>DDD Destino</Th>
              <Th>Tel Destino</Th>
              <Th>Hr Qtd Chamada</Th>
              <Th>Duracao</Th>
              <Th>S</Th>
              <Th>Valor Servico</Th>
              <Th>Icms</Th>
              <Th>Conta</Th>
              <Th>NUM DETALHE</Th>
              <Th>Cod_L_Origem_Chamada</Th>
              <Th>Cod_L_Origem_Chamada</Th>
              <Th>Vencimento</Th>
              <Th>CONTESTAR</Th>
              <Th>VALOR_CONTESTA</Th>
              <Th>Localidade</Th>
              <Th>Telefone Origem</Th>
              <Th>Sigla Órgão Análise</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dados.map((linha, index) => (
              <Tr key={index}>
                <Td>{linha['Site    ']}</Td>
                {/* <Td>{linha['Site.replace(/\s/g, '')']}</Td> */}
                <Td>{linha['NomeCliente                                       ']}</Td>
                <Td>{linha['Finalidade                                        ']}</Td>
                <Td>{linha['Contrato']}</Td>
                <Td>{linha['CicloFaturam']}</Td>
                <Td>{linha['Num_Fatura            ']}</Td>
                <Td>{linha['Num_Nota_Fiscal']}</Td>
                <Td>{linha['CodDDD']}</Td>
                <Td>{linha['NumTelefone']}</Td>
                <Td>{linha['Designacao                    ']}</Td>
                <Td>{linha['Valor_a_pagar']}</Td>
                <Td>{linha['sNomeLocalPT1                 ']}</Td>
                <Td>{linha['Tip_Logradouro_1']}</Td>
                <Td>{linha['Nome_Logradouro_1             ']}</Td>
                <Td>{linha['Num_Imovel_1']}</Td>
                <Td>{linha['Nome_Bairro_1       ']}</Td>
                <Td>{linha['Cep_1   ']}</Td>
                <Td>{linha['SiglaUF_1 ']}</Td>
                <Td>{linha['sNomeLocalPT2                 ']}</Td>
                <Td>{linha['Tip_Logradouro_2']}</Td>
                <Td>{linha['Nome_Logradouro_2             ']}</Td>
                <Td>{linha['Num_Imovel_2']}</Td>
                <Td>{linha['Nome_Bairro_2       ']}</Td>
                <Td>{linha['Cep_2   ']}</Td>
                <Td>{linha['SiglaUF_2 ']}</Td>
                <Td>{linha['Prod_Telefone']}</Td>
                <Td>{linha['Velocidade_Circuito']}</Td>
                <Td>{linha['Num_Pagina']}</Td>
                <Td>{linha['Num_Linha']}</Td>
                <Td>{linha['Data_Servico']}</Td>
                <Td>{linha['Cod_Servico / Descricao_Servico                                                 ']}</Td>
                <Td>{linha['Degrau']}</Td>
                <Td>{linha['Num_Tel_Origem']}</Td>
                <Td>{linha['Cod_Selecao']}</Td>
                <Td>{linha['DDD_Tel_Destino']}</Td>
                <Td>{linha['Telefone_Destino']}</Td>
                <Td>{linha['Hr_Qtd_Chamada']}</Td>
                <Td>{linha['Duracao']}</Td>
                <Td>{linha['S']}</Td>
                <Td>{linha['Valor_Servico']}</Td>
                <Td>{linha['Aliquota_Icms']}</Td>
                <Td>{linha['CONTA   ']}</Td>
                <Td>{linha['NUM_DETALHE']}</Td>
                <Td>{linha['Cod_L_Origem_Chamada']}</Td>
                <Td>{linha['Cod_L_Origem_Chamada    ']}</Td>
                <Td>{linha['Vencimento']}</Td>
                <Td>{linha['CONTESTAR     ']}</Td>
                <Td>{linha['VALOR_CONTESTA']}</Td>
                <Td>{linha['Localidade          ']}</Td>
                <Td>{linha['Telefone Origem ']}</Td>
                <Td>{linha['Sigla Órgão Análise ']}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
    </Box>
  )
}
export default Home;