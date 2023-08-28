
import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Heading, Button, IconButton, Divider, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';

export default function Dashboard() {
  const [userData, setUserData] = useState({});
  const [pillsData, setPillsData] = useState([]);
  const [notification, setNotification] = useState('');
  const id = localStorage.getItem('userid');

  useEffect(() => {
    fetch(`https://64e9f297bf99bdcc8e672256.mockapi.io/PillReminder/${id}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        const pillsByMedication = {};
        data.reminder.forEach(pill => {
          if (!pillsByMedication[pill.medicationName]) {
            pillsByMedication[pill.medicationName] = [];
          }
          pillsByMedication[pill.medicationName].push(pill);
        });
        const pillsArray = [];
        Object.values(pillsByMedication).forEach(pills => {
          pills.forEach(pill => {
            pill.times.forEach(time => {
              pillsArray.push({ ...pill, time });
            });
          });
        });

        const sortedPills = pillsArray.sort((a, b) => {
          const dateComparison = new Date(a.date) - new Date(b.date);
          return dateComparison !== 0 ? dateComparison : a.time.localeCompare(b.time);
        });

        setPillsData(sortedPills);

        const currentTime = new Date();
        const currentPills = sortedPills.filter(pill => {
          const pillTime = new Date(`${pill.date} ${pill.time}`);
          return pillTime > currentTime;
        });

        if (currentPills.length > 0) {
          const nextPill = currentPills[0];
          setNotification(`Next Dose: ${nextPill.medicationName}, Time: ${nextPill.time} on ${nextPill.date}`);
        } else {
          setNotification('Great job! No doses scheduled for today.');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [id, pillsData]);

  const handleDelete = async (medicationName, doseIndex) => {
    try {
      await fetch(`https://64e9f297bf99bdcc8e672256.mockapi.io/PillReminder/${id}/${doseIndex}`, {
        method: 'DELETE',
      });
 
      setPillsData(prevPillsData => prevPillsData.filter(pill => !(pill.medicationName === medicationName && pill.doseIndex === doseIndex)));
    } catch (error) {
      console.error('Error deleting dose:', error);
    }
  };
  return (
    <Flex direction="column" p={8} align="center" bg="black">
      <Heading color="white" mb={4}>
        Welcome, {userData.name}!
      </Heading>
      <Box bg="gray.800" color="white" p={4} borderRadius="md" boxShadow="md" mb={4}>
        {notification}
      </Box>
      <Button as={RouterLink} to="/reminder" colorScheme="blue" mb={4}>
        Add Pill
      </Button>
      <Divider mb={4} />

      <Table variant="simple" width="100%">
        <Thead>
          <Tr>
            <Th color="white">Medication Name</Th>
            <Th color="white">Dosage</Th>
            <Th color="white">Frequency</Th>
            <Th color="white">Date</Th>
            <Th color="white">Time</Th>
            <Th color="white">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pillsData &&
            pillsData.map(pill => (
              <Tr key={`${pill.id}-${pill.time}`}>
                <Td color="white">{pill.medicationName}</Td>
                <Td color="white">{pill.dosage} Doses</Td>
                <Td color="white">{pill.frequency}</Td>
                <Td color="white">{pill.date}</Td>
                <Td color="white">{pill.time}</Td>
                <Td color="white">
                  <IconButton
                    aria-label="Delete"
                    colorScheme="red"
                    onClick={() => handleDelete(pill.id)}
                    icon={<DeleteIcon />}
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Flex>
  );
}