import { Button, Flex, Input, Select } from '@chakra-ui/react';
import React from 'react';




export default function FiltroCirc() {
    return (

        <Flex
            flexDir="column"
        >
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />
            <Button colorScheme='teal' variant='outline'>Button</Button>
            <Button colorScheme='teal' variant='outline'>Button</Button>

        </Flex>


    )
}