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

// const formatDate = (dateString: string): string => {
//   if (!dateString) return ""; // Verifica se a string é vazia ou null

//   const date = new Date(dateString);
//   if (isNaN(date.getTime())) return ""; // Verifica se a data é inválida

//   const dia: number = date.getDate();
//   const mes: number = date.getMonth() + 1;
//   const ano: number = date.getFullYear();
  
//   const formattedDate = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano.toString().padStart(4, '0')}`;
  
//   return formattedDate;
// };

const IndividualData: React.FC<IndividualDataProps> = ({ individualExcelData }) => {
  // const formattedDataFatura = formatDate(individualExcelData.Data_fatura);
  // const formattedVencimento = formatDate(individualExcelData.Vencimento);

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