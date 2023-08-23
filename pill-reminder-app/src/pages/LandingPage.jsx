import React from 'react';
import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react';

const LandingPage = () => {
    return (
        <Box bg="gray.50" minHeight="100vh">
            <Box bg="white" boxShadow="sm">
                <Flex justify="space-between" align="center" px={8} py={4}>
                    <Text fontSize="xl" fontWeight="bold">
                        Pill Reminder
                    </Text>
                    <Stack direction="row" spacing={4}>
                        <Text>Home</Text>
                        <Text>Login</Text>
                        <Text>Sign Up</Text>
                        <Text>About</Text>
                        <Text>Contact</Text>
                    </Stack>
                </Flex>
            </Box>
            <Box bg="blue.600" color="white" py={40} textAlign="center">
                <Box maxW="md" mx="auto">
                    <Text fontSize="4xl" fontWeight="bold" mb={4}>
                        Never Miss a Pill Again
                    </Text>
                    <Text fontSize="xl" mb={6}>
                        Stay on top of your medication schedule with our pill reminder app.
                    </Text>
                    <Button colorScheme="pink" size="lg">
                        Get Started
                    </Button>
                </Box>
            </Box>
            <Flex justify="space-around" py={20}>
                <Box textAlign="center" p={6}>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Easy to Use
                    </Text>
                    <Text>Our intuitive interface makes managing your pills a breeze.</Text>
                </Box>
                <Box textAlign="center" p={6}>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Custom Reminders
                    </Text>
                </Box>
                <Box textAlign="center" p={6}>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Track Your Progress
                    </Text>
                </Box>
            </Flex>
            <Box bg="white" boxShadow="sm" py={6} textAlign="center">
                <Text>&copy; 2023 Pill Reminder. All rights reserved.</Text>
            </Box>
        </Box>
    );
};

export default LandingPage;
