import React from 'react';
import {
    Box,
    Heading,
    Form,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Table,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import * as XLSX from 'xlsx';

export default function Import() {
    const [excelFile, setExcelFile] = React.useState(null);
    const [typeError, setTypeError] = React.useState(null);
    const [excelData, setExcelData] = React.useState(null);

    const handleFileChange = (event) => {
        const fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setTypeError(null);
                const reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (event) => {
                    setExcelFile(event.target.result);
                };
            } else {
                setTypeError('Please select only excel file types');
                setExcelFile(null);
            }
        } else {
            console.log('Please select your file');
        }
    };

    const handleFileSubmit = (event) => {
        event.preventDefault();

        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data.slice(0, 10));
        }
    };

    return (
        <Box p={4}>
            <Heading as="h3">Upload & View Excel Sheets</Heading>

            <Form onSubmit={handleFileSubmit}>
                <FormControl>
                    <FormLabel>Excel File</FormLabel>
                    <Input type="file" onChange={handleFileChange} />
                </FormControl>

                <Button type="submit" colorScheme="green">UPLOAD</Button>

                {typeError && (
                    <Text color="red">{typeError}</Text>
                )}
            </Form>

            {excelData && (
                <Table>
                    <Tbody>
                        {excelData.map((individualExcelData, index) => (
                            <Tr key={index}>
                                {Object.keys(individualExcelData).map((key) => (
                                    <Td key={key}>{individualExcelData[key]}</Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            )}

            {!excelData && <Text>No File is uploaded yet!</Text>}
        </Box>
    );
};
