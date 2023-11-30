import React from 'react';
import IndividualData from './IndividualDataBk';
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
const Data: React.FC<DataProps> = ({ excelData }) => {
  return (
    <>
      {excelData.map((individualExcelData) => (
        <Tr key={individualExcelData.Circuito}>
          <IndividualData
            individualExcelData={{
              ...individualExcelData,
              Data_fatura:(individualExcelData.Data_fatura),
              Vencimento: (individualExcelData.Vencimento),
            }}
          />
        </Tr>
      ))}
    </>
  );
};

export default Data;