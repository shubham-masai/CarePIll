import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    Text, Link
} from '@chakra-ui/react'

import { Link as RouterLink } from "react-router-dom"
export default function Login() {
    const carePillStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '1.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    };


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Text style={carePillStyle} fontSize="xl" fontWeight="bold" mb={4}>CarePill</Text>

                <FormControl id="userName">
                    <Avatar size="xl" src="https://bit.ly/dan-abramov"></Avatar>
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="password"
                        _placeholder={{ color: 'gray.500' }}
                        type="password"
                    />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                        bg={'red.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'red.500',
                        }}>
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Submit
                    </Button>
                </Stack>
                <Stack>
                    <Text mt={4} textAlign="center" fontSize="sm">
                        Don't have an account?{' '}
                        <Link as={RouterLink} to="/signup" color="blue.500">
                            Sign up
                        </Link>
                    </Text>
                </Stack>
            </Stack>
        </Flex>
    )
}

