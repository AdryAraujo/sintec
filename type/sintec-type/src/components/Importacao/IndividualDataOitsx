import { Th } from '@chakra-ui/react';
import React from 'react';

interface IndividualDataProps {
  individualExcelData: {
    Circuito: string;
    Contrato: string;
    Orgão: string;
    Unidade: string;
    Cidade: string;
    Velocidade: string;
    Mensalidade: string;
    Data_fatura: string;
    Vencimento: string;
  };
}

const IndividualData: React.FC<IndividualDataProps> = ({ individualExcelData }) => {
  return (
    <>
      <Th>{individualExcelData.Circuito}</Th>
      <Th>{individualExcelData.Contrato}</Th>
      <Th>{individualExcelData.Orgão}</Th>
      <Th>{individualExcelData.Unidade}</Th>
      <Th>{individualExcelData.Cidade}</Th>
      <Th>{individualExcelData.Velocidade}</Th>
      <Th>{individualExcelData.Mensalidade}</Th>
      <Th>{individualExcelData.Data_fatura}</Th>
      <Th>{individualExcelData.Vencimento}</Th>
    </>
  );
};

export default IndividualData;