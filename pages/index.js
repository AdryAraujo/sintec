import Sidebar from '../components/Sidebar'
import { Flex, Text, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import Teste from "../components/teste"
import Login from '../components/Login'

export default function Home() {
  return (
    <Flex w="100%">
      {/* <Login/> */}
      <Sidebar />
      <Flex
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Text>Click the
          <IconButton
            background="none"
            _hover={{ background: 'none' }}
            icon={<FiMenu />}
          />
        to resize the vertical navigation bar.</Text>
      </Flex>
    </Flex>
  )
}
