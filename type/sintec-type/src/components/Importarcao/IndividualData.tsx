import { Th } from '@chakra-ui/react';
import React from 'react';

interface IndividualDataProps {
  individualExcelData: {
    Id: string;
    FirstName: string;
    LastName: string;
    Gender: string;
    Country: string;
    Age: string;
    Date: string;
  };
}
const IndividualData: React.FC<IndividualDataProps> = ({ individualExcelData }) => {
  return (
    <>
      <Th>{individualExcelData.Id}</Th>
      <Th>{individualExcelData.FirstName}</Th>
      <Th>{individualExcelData.LastName}</Th>
      <Th>{individualExcelData.Gender}</Th>
      <Th>{individualExcelData.Country}</Th>
      <Th>{individualExcelData.Age}</Th>
      <Th>{individualExcelData.Date}</Th>
    </>
  );
};

export default IndividualData;
