import { Center, Heading } from '@chakra-ui/react'
import { Button, FormControl, Flex, Input, Stack, useColorModeValue, HStack, useToast } from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function VerifyEmailForm() {
    const Navigate = useNavigate();
    const location = useLocation();
    const { otp_val, email, name, password } = location.state || {};
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const toast = useToast();

    const handleVerify = () => {

        const enteredOTP = otp1 + otp2 + otp3 + otp4;

        if (enteredOTP === otp_val.toString()) {
            const userData = {
                name: name,
                email: email,
                password: password
            };

            fetch('https://64e9f297bf99bdcc8e672256.mockapi.io/PillReminder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => response.json())
                .then(data => {
                  
                    toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                    });
                    Navigate("/login");
                })
                .catch(error => {
                    toast({
                        title: 'Error creating account.',
                        description: "Please Enter a correct OTP.",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                    });
                    console.error("Error creating account:", error);
                });
        } else {
            toast({
                title: 'Error creating account.',
                description: "Incorrect OTP.",
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
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'sm'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={10}>
                <Center>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Verify your Email
                    </Heading>
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    We have sent code to your email
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontWeight="bold"
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    {email}
                </Center>
                <FormControl>
                    <Center>
                        <HStack>
                            <PinInput>
                                <PinInputField value={otp1} onChange={(e) => setOtp1(e.target.value)} />
                                <PinInputField value={otp2} onChange={(e) => setOtp2(e.target.value)} />
                                <PinInputField value={otp3} onChange={(e) => setOtp3(e.target.value)} />
                                <PinInputField value={otp4} onChange={(e) => setOtp4(e.target.value)} />
                            </PinInput>
                        </HStack>
                    </Center>
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleVerify}>
                        Verify
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}