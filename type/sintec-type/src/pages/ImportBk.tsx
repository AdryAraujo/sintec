import { useState } from 'react';
import Data from '../components/Importacao/DataBk';
import * as XLSX from 'xlsx';
import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import Sidebar from '@/components/Navbar/Sidebar';
import Rotas from '../components/Routes/RotasCirc';
import { IoIosEye } from 'react-icons/io';


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

    // const [navSize, changeNavSize] = useState<"small" | "large">("large");

    return (
        <Flex
            className={'containerTotal'}
        >
            <Sidebar/>
            <Flex
                className={'containerPrincipal'}
            >
                <Rotas />
                <Flex
                    paddingInline={'15px'}
                    // w={navSize === "small" ? "70%" : "95%"}
                    className={'containerTable'}
                >
                    <Text
                        alignSelf={'center'}
                        margin={5}
                        fontSize='4xl'>Importação de Contas</Text>
                    <Flex
                        alignItems={'center'}
                        flexDirection={'column'}>
                        <form
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <InputGroup>
                                <Input
                                    // className={style.input_file}
                                    type="file"
                                    onChange={handleFile}
                                    required
                                    placeholder="Escolher"
                                    border={'none'}
                                />
                            </InputGroup>

                            {excelFileError && (
                                <div className="text-danger" style={{ marginTop: 5 + 'px' }}>
                                    {excelFileError}
                                </div>
                            )}
                            <Button
                                type="submit"
                                leftIcon={<IoIosEye />}
                                backgroundColor='cyan.500'
                                variant='solid'
                                color='white'
                                height='32px'
                                ml={8}
                                mr={8}
                                mb={2}
                            >
                                Pré-Vizualizar
                            </Button>
                            <Button
                                type="submit"
                                leftIcon={<FiSend />}
                                backgroundColor='blue.600'
                                variant='solid'
                                color='white'
                                height='32px'
                                mb={2}
                            >
                                Enviar
                            </Button>
                        </form>
                    </Flex>
                    {/* view file section */}
                    {excelData !== null && (
                         <Box className={'containerTabela'}
                         maxH={'70%'}
                         overflowY="auto" overflowX="auto"
                         marginTop={'20px'}
                         marginRight={'15px'}
                         borderRadius={'12px'}
                     >
                            <Table
                               className={'tabela'}
                                size='sm'>
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
                                    <Data excelData={excelData}/>
                                </Tbody>
                            </Table>
                        </Box>
                    )}


                </Flex>
            </Flex>
        </Flex >
    );
};

export default App;
