import { useState } from 'react';
import Papa from 'papaparse';
import { Box, Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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
      <Table  size='sm'>
        <Thead>
          <Tr>
            <Th>Site</Th>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
            <Th>Endereço</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dados.map((linha, index) => (
            <Tr key={index}>
              <Td>{linha['Site    ']}</Td>
              <Td>{linha.NomeCliente}</Td>
              <Td>{linha.Finalidade}</Td>
              <Td>{linha.Contrato}</Td>
              <Td>{linha.CicloFaturam}</Td>
              <Td>{linha.Num_Fatura}</Td>
              <Td>{linha.Num_Nota_Fiscal}</Td>
              <Td>{linha.CodDDD}</Td>
              <Td>{linha.NumTelefone}</Td>
              <Td>{linha.Designacao}</Td>
              <Td>{linha.Valor_a_pagar}</Td>
              <Td>{linha.sNomeLocalPT1}</Td>
              <Td>{linha.Tip_Logradouro_1}</Td>
              <Td>{linha.Nome_Logradouro_1}</Td>
              <Td>{linha.Num_Imovel_1}</Td>
              <Td>{linha.Nome_Bairro_1}</Td>
              <Td>{linha.Cep_1}</Td>
              <Td>{linha.SiglaUF_1}</Td>
              <Td>{linha.sNomeLocalPT2}</Td>
              <Td>{linha.Tip_Logradouro_2}</Td>
              <Td>{linha.Nome_Logradouro_2}</Td>
              <Td>{linha.Num_Imovel_2}</Td>
              <Td>{linha.Nome_Bairro_2}</Td>
              <Td>{linha.Cep_2}</Td>
              <Td>{linha.SiglaUF_2}</Td>
              <Td>{linha.Prod_Telefone}</Td>
              <Td>{linha.Velocidade_Circuito}</Td>
              <Td>{linha.Num_Pagina}</Td>
              <Td>{linha.Num_Linha}</Td>
              <Td>{linha.Data_Servico}</Td>
              <Td>{linha.Cod_Servico}</Td>
              <Td>{linha.Descricao_Servico}</Td>
              <Td>{linha.Degrau}</Td>
              <Td>{linha.Num_Tel_Origem}</Td>
              <Td>{linha.Cod_Selecao}</Td>
              <Td>{linha.DDD_Tel_Destino}</Td>
              <Td>{linha.Telefone_Destino}</Td>
              <Td>{linha.Hr_Qtd_Chamada}</Td>
              <Td>{linha.Duracao}</Td>
              <Td>{linha.S}</Td>
              <Td>{linha.Valor_Servico}</Td>
              <Td>{linha.Aliquota_Icms}</Td>
              <Td>{linha.CONTA}</Td>
              <Td>{linha.NUM_DETALHE}</Td>
              <Td>{linha.Cod_L_Origem_Chamada}</Td>
              <Td>{linha.Cod_L_Destino_Chamada}</Td>
              <Td>{linha.Vencimento}</Td>
              <Td>{linha.CONTESTAR}</Td>
              <Td>{linha.VALOR_CONTESTA}</Td>
              <Td>{linha.Localidade}</Td>
              <Td>{linha['Telefone Origem']}</Td>
              <Td>{linha['Sigla Órgão Análise']}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
export default Home;