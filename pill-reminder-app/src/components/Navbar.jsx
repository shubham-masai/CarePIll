import { Flex, HStack, Spacer, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const Navigate = useNavigate();
    const carePillStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '1.5rem',
        textShadow: '0px 0px 5px grey'
    };

    const { isLoggedIn, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
        Navigate("/");
    };


    return (
        <Flex data-cy="navbar" align="center" p={4}>
            <Text fontSize="xl" fontWeight="bold">
                <span style={carePillStyle}>CarePill</span>
            </Text>

            <Spacer />
            <HStack spacing="24px">
                <Link as={RouterLink} to="/">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link as={RouterLink} to="/login">Login</Link>
                        <Link as={RouterLink} to="/signup">Sign Up</Link>
                    </>
                )}
                <Link as={RouterLink} to="/">About</Link>
                <Link as={RouterLink} to="/">Contact</Link>
            </HStack>
        </Flex>
    );
}

export default Navbar;
