import {Box, Flex, Icon, IconButton, Text} from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";
import PropTypes from "prop-types";
import {MdClose, MdMenu} from "react-icons/md";

export const Logo = ({ collapse, setCollapse }) => (
    <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={collapse ? "row" : "column"}

    >
        <Box display="flex" alignItems="center">
            <Icon as={AiFillThunderbolt} fontSize={30} />
            {collapse && (
                <Text
                    fontWeight="bold"
                    fontSize={{base:"15px", md:"16px"}}
                    data-state="open"
                    _open={collapse? {
                        animationName: "fade-in",
                        animationDuration: ".8s",
                    }: ""}
                >
                    SYSTEMWEBDATA
                </Text>
            )}
        </Box>
        <IconButton
            aria-label="Toggle Menu"
            variant="subtle"
            bg="blue.400"
            color="white"
            borderRadius="xl"
            size="xs"
            onClick={() => setCollapse(!collapse)}
            data-state="open"
            _open={collapse? {
                animationName: "spin, fade-in",
                animationDuration: ".6s",
            }: ""}
        >
            {collapse ? <MdClose /> : <MdMenu />}
        </IconButton>
    </Flex>
);
Logo.propTypes = {
    collapse: PropTypes.bool.isRequired,
    setCollapse: PropTypes.func.isRequired,
};