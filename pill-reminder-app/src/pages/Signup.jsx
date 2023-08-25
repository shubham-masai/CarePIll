import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    Text,
    Link
} from '@chakra-ui/react';

import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const carePillStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '1.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && password) {
            Navigate("/verifyotp");
        } else {
            alert("Please fill in all fields before submitting.");
        }
    }

    const handleCancle = () => {
        Navigate('/');
    }
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

                <form onSubmit={handleSubmit}>
                    <FormControl id="userName">
                        <Avatar size="xl" src="https://bit.ly/sage-adebayo"></Avatar>
                    </FormControl>

                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            placeholder="Enter Your Name"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            placeholder="your-email@example.com"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                            bg={'red.400'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'red.500',
                            }}
                            marginTop={3}
                            onClick={handleCancle}
                        >
                            Cancel
                        </Button>


                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w="full"
                            _hover={{
                                bg: 'blue.500',
                            }}
                            marginTop={3}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Stack>
                </form>

                <Text mt={4} textAlign="center" fontSize="sm">
                    Already have an account?{' '}
                    <Link as={RouterLink} to="/login" color="blue.500">
                        Log in
                    </Link>
                </Text>
            </Stack>
        </Flex>
    )
}