import { useState } from 'react';
import Data from '../components/Importarcao/Data'; // Certifique-se de ajustar o caminho conforme necessário
import * as XLSX from 'xlsx';
import { Button, Flex, Input, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import Sidebar from '@/components/Navbar/Sidebar';
import Rotas from '../components/Rotas';
import styles from '../styles/Container.module.css'
import style from '../styles/Table.module.css'


const App: React.FC = () => {
    // on change states
    const [excelFile, setExcelFile] = useState<ArrayBuffer | null>(null);
    const [excelFileError, setExcelFileError] = useState<string | null>(null);

    // submit
    const [excelData, setExcelData] = useState<Array<Record<string, any>> | null>(null);

    // it will contain array of objects

    // handle File
    const fileType = ['application/vnd.ms-excel'];
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        let selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target?.result as ArrayBuffer);
                };
            } else {
                setExcelFileError('Por favor, selecione um arquivo .xlsx');
                setExcelFile(null);
            }
        } else {
            console.log('Please select your file');
        }
    };

    // submit function
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data as Array<Record<string, any>>);
        } else {
            setExcelData(null);
        }
    };

    return (
        <Flex
            className={styles.containerTotal}
        >
            <Sidebar />
            <Flex
                className={styles.containerPrincipal}
            >
                <Rotas />
                <Flex
                    paddingInline={'15px'}
                    className={styles.containerTable}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Detalhamento das Contas</Text>
                    <div className="form">
                        <form
                            className="form-group"
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <label>
                                <h5>Upload Excel file</h5>
                            </label>
                            <Input
                                type="file"
                                onChange={handleFile}
                                required
                            />
                            {excelFileError && (
                                <div className="text-danger" style={{ marginTop: 5 + 'px' }}>
                                    {excelFileError}
                                </div>
                            )}
                            <Button
                                type="submit"
                                leftIcon={<FiSend />}
                                backgroundColor='cyan.300'
                                variant='solid'
                                color='white'
                                height='32px'
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                    {/* view file section */}
                    <div className="viewer">
                        {excelData === null && <>No file selected</>}
                        {excelData !== null && (
                            <TableContainer
                                width={'full'}
                                className={style.containerTable}
                            >
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th >ID</Th>
                                            <Th >First Name</Th>
                                            <Th >Last Name</Th>
                                            <Th >Gender</Th>
                                            <Th >Country</Th>
                                            <Th >Age</Th>
                                            <Th >Date</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Data excelData={excelData} />
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        )}
                    </div>
                </Flex>
            </Flex>
        </Flex >
    );
};

export default App;
