import { useState } from 'react';
import Data from '../components/Importacao/Data';
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
                        fontSize='4xl'>Importação de Contas</Text>
                    <Flex
                    border={'1px solid black'}
                    display={'flex'}>
                        <form
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                type="file"
                                onChange={handleFile}
                                required
                                border={'red'}
                                borderRadius={'12px'}
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
                                justifySelf={'center'}
                            >
                                Submit
                            </Button>
                        </form>
                    </Flex>
                    {/* view file section */}
                    <div className="viewer">
                        {excelData === null && <>No file selected</>}
                        {excelData !== null && (
                            <TableContainer
                                width={'full'}
                                className={style.containerTable}
                            >
                                <Table size='sm'>
                                    <Thead>
                                        <Tr>
                                            <Th >Circuito</Th>
                                            <Th >Contrato</Th>
                                            <Th >Orgão</Th>
                                            <Th >Unidade</Th>
                                            <Th >Cidade</Th>
                                            <Th >Velocidade</Th>
                                            <Th >Mensalidade</Th>
                                            <Th >Data_fatura</Th>
                                            <Th >Vencimento</Th>
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
