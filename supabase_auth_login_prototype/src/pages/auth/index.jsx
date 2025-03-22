import {
    Box,
    Flex
} from "@chakra-ui/react";


const AuthIndex = ({children}) => {
    return (
        <Box
            minW="100vw"
            minH="100vh"
            overflow="hidden"
            position="relative"
            bgGradient={["none", "linear-gradient(135deg, #001D4F 0%, #27AE60 50%, #001D4F 100%)"]}>
            <Flex
                align="center" justify="center" minH="100vh" p={4}>
                <Box
                    width="100%"
                    maxWidth="400px"
                    p={8}
                    borderRadius="xl"
                    bg="rgba(0, 51, 140, 0.25)"
                    backdropFilter={{ base: "none", md: "none", lg: "blur(20px)" }}
                    boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                    border="1px solid rgba(39, 174, 96, 0.2)">
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}
export default AuthIndex;

