import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Avatar,
    Text,
    Link,
    useToast
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Authcontext';
export default function Login() {
    const carePillStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '1.5rem',
        textShadow: '2px 0px 0px #4299E1',
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const toast = useToast();
    const { login } = useContext(AuthContext);
    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://64e9f297bf99bdcc8e672256.mockapi.io/PillReminder?email=${email}`);
            const data = await response.json();
            if (data[0].password === password) {
                localStorage.setItem("userid", data[0].id);
                login();
                toast({
                    title: 'Account Login.',
                    description: `Account Login successfully ${data[0].name}.`,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
                Navigate("/dashboard");
            } else {
                toast({
                    title: 'Error Account Login.',
                    description: "Kindly Check Your Password.",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                title: 'Error Account Login.',
                description: "Kindly Check Your Credential...",
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg="black">
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg="transparent"
                border="2px solid #F9A70B"
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Text style={carePillStyle} fontSize="xl" fontWeight="bold" mb={4} color="#F9A70B">CarePill</Text>

                <FormControl id="userName">
                    <Avatar size="xl" src="https://bit.ly/dan-abramov"></Avatar>
                </FormControl>

                <FormControl id="email" isRequired color="#F9A70B">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        value={email}
                        color="white"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl id="password" isRequired color="#F9A70B">
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="password"
                        _placeholder={{ color: 'gray.500' }}
                        type="password"
                        value={password}
                        color="white"
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
                        }}>
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </Stack>
                <Stack>
                    <Text mt={4} textAlign="center" fontSize="sm" color="#F9A70B">
                        Don't have an account?
                        <Link as={RouterLink} to="/signup" color="blue.500" marginLeft={2}>
                            Sign up
                        </Link>
                    </Text>
                </Stack>
            </Stack>
        </Flex>
    )
}