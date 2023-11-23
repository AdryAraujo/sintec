import React from 'react';
import IndividualData from './IndividualData';
import { Tr } from '@chakra-ui/react';

interface DataProps {
  excelData: Array<{
    Circuito: string;
    Contrato: string;
    Orgão: string;
    Unidade: string;
    Cidade: string;
    Velocidade: string;
    Mensalidade: string;
    Data_fatura: string;
    Vencimento: string;
  }>;
}

const formatDate = (dateString: string): string => {
  if (!dateString) return ""; // Verifica se a string é vazia ou null

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return ""; // Verifica se a data é inválida

  const dia: number = date.getDate();
  const mes: number = date.getMonth() + 1;
  const ano: number = date.getFullYear();
  
  const formattedDate = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano.toString().padStart(4, '0')}`;

  return formattedDate;
};

const Data: React.FC<DataProps> = ({ excelData }) => {
  return (
    <>
      {excelData.map((individualExcelData) => (
        <Tr key={individualExcelData.Circuito}>
          <IndividualData
            individualExcelData={{
              ...individualExcelData,
              Data_fatura: formatDate(individualExcelData.Data_fatura),
              Vencimento: formatDate(individualExcelData.Vencimento),
            }}
          />
        </Tr>
      ))}
    </>
  );
};

export default Data;