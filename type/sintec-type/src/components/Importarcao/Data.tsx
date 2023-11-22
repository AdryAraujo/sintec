import React from 'react';
import IndividualData  from './IndividualData';

interface DataProps {
  excelData: Array<{
    Id: string;
    FirstName: string;
    LastName: string;
    Gender: string;
    Country: string;
    Age: string;
    Date: string;
  }>;
}

const Data: React.FC<DataProps> = ({ excelData }) => {
  return (
    <>
      {excelData.map((individualExcelData) => (
        <tr key={individualExcelData.Id}>
          <IndividualData individualExcelData={individualExcelData} />
        </tr>
      ))}
    </>
  );
};

export default Data;
