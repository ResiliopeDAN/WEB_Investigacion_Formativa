import {Box, Flex, Icon, Text} from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";

const Logos = () => (
    <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"

    >
        <Box display="flex" alignItems="center">
            <Icon as={AiFillThunderbolt}/>
                <Text
                    fontWeight="bold"
                    fontSize={{base:"15px", md:"16px"}}
                >
                    SYSTEMWEBDATA
                </Text>
        </Box>
    </Flex>
);
export default Logos;