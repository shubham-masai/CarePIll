import { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Select, Button, Text } from '@chakra-ui/react';
import { useNavigate} from 'react-router-dom';
function ReminderForm({ setFlag }) {
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [date, setDate] = useState('');
  const [times, setTimes] = useState([]);
  const [newTime, setNewTime] = useState('');

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReminder = {
      medicationName,
      dosage,
      frequency,
      date,
      times: [...times, newTime],
    };
    try {
      const id = localStorage.getItem("userid");
      const response = await fetch(`https://64e9f297bf99bdcc8e672256.mockapi.io/PillReminder/${id}`);
      const userData = await response.json();
      const updatedReminders = [...userData.reminder, newReminder];
      const updateResponse = await fetch(`https://64e9f297bf99bdcc8e672256.mockapi.io/PillReminder/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reminder: updatedReminders,
        }),
      });
      if (updateResponse.ok) {
        setMedicationName('');
        setDosage('');
        setFrequency('');
        setDate('');
        setTimes([]);
        setNewTime('');
        Navigate("/dashboard");
      } else {
        console.error('Failed to send data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddTime = () => {
    if (newTime !== '' && !times.includes(newTime)) {
      setTimes([...times, newTime]);
      setNewTime('');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Box bg="black"
      pt={10}
    >
      <Box
        bg="black"
        width="500px"
        mx="auto"
        mt={8}
        p={6}

        borderRadius="lg"
        boxShadow="md"
        border="2px solid #F9A70B"

      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="#F9A70B">
          Set Medication Reminder
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel color="#F9A70B">Medication Name</FormLabel>
            <Input
              type="text"
              value={medicationName}
              placeholder='Enter Medicine Name'
              onChange={(e) => setMedicationName(e.target.value)}
              color="white"
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="#F9A70B">Dosage</FormLabel>
            <Input
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              placeholder='Enter Number of Doses'
              color="white"
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="#F9A70B">Frequency</FormLabel>
            <Select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              color="white"
              required
            >
              <option color='black' value="">Select Frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="custom">Custom</option>
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="#F9A70B">Date</FormLabel>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
              color="white"
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="#F9A70B">Times</FormLabel>
            <Input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              color="white"
            />
            <Button mt={2} colorScheme="teal" size="sm" onClick={handleAddTime}>
              Add Time
            </Button>
            {times.length > 0 && (
              <Text mt={2} color="#F9A70B">
                Selected Times: {times.join(', ')}
              </Text>
            )}
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" isFullWidth>
            Set Reminder
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default ReminderForm;