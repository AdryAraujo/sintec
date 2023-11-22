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
      <th>{individualExcelData.Id}</th>
      <th>{individualExcelData.FirstName}</th>
      <th>{individualExcelData.LastName}</th>
      <th>{individualExcelData.Gender}</th>
      <th>{individualExcelData.Country}</th>
      <th>{individualExcelData.Age}</th>
      <th>{individualExcelData.Date}</th>
    </>
  );
};

export default IndividualData;
