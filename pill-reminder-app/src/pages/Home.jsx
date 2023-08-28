import React from 'react';
import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Clock from "./clock"
function Home() {
    const Navigate = useNavigate();
    const handleStarted = () => {
        Navigate("/signup");
    }

    const sectionStyles = {
        border: '2px solid #F9A70B',
        borderRadius: '8px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        maxWidth: '600px',
        margin: '0 auto',
    };

    return (
        <Box bg="gray.50" minHeight="100vh">
            <Box bg="black" color="white" py={40} textAlign="center">
                <Clock/>
                <Box maxW="md" mx="auto" style={sectionStyles}>
                    <Text fontSize="4xl" fontWeight="bold" mb={4}>
                        Never Miss a Pill Again
                    </Text>
                    <Text fontSize="xl" mb={6}>
                        Stay on top of your medication schedule with our pill reminder app. Set personalized reminders to ensure you never forget to take your pills. Our intuitive interface makes managing your pills a breeze.
                    </Text>
                    <Button colorScheme="pink" size="lg" onClick={handleStarted}>
                        Get Started
                    </Button>
                </Box>
            </Box>
            <Flex justify="space-around" py={20}>
                <Box textAlign="center" p={6} >
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Easy to Use
                    </Text>
                    <Text>Our intuitive interface makes managing your pills a breeze. With just a few taps, you can easily schedule and manage your medication intake.</Text>
                </Box>
                <Box textAlign="center" p={6}>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Custom Reminders
                    </Text>
                    <Text >Set personalized reminders to ensure you never forget to take your pills. Customize the timing and frequency of reminders to align with your medication schedule and preferences
                    </Text>
                </Box>
                <Box textAlign="center" p={6}>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Track Your Progress
                    </Text>
                    <Text>
                        Monitor your medication intake and track your progress over time. Our app provides insights into your adherence, helping you stay on track with your prescribed medication regimen.
                    </Text>
                </Box>
            </Flex>
            <Box bg="white" boxShadow="sm" py={6} textAlign="center">
                <Text>&copy; 2023 Pill Reminder. All rights reserved.</Text>
            </Box>
        </Box>
    );
};

export default Home;