import { Box, Grid, Heading, List } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {NavItemsF} from "@/components/Home/footer/clauses/Nav.jsx";


export function ContactUs({ items = []}) {

    return (
        <Box>
            <Heading color={{base:"#00B5BB", _dark:"#CDF120    "}}>Contactanos</Heading>
            <Grid pt="40px" color="white">
                <List.Root
                    justifyContent="center"
                    colorText="white"
                    variant="plain"
                    flexDirection={{base:"row", md:"row", lg:"column"}}
                    gap={1}

                >
                    {items.map((item) => (
                        <NavItemsF key={item.label} {...item} />
                    ))}
                </List.Root>
            </Grid>
        </Box>
    )

}

ContactUs.propTypes = {
    items: PropTypes.array,
    onToggle: PropTypes.func.isRequired
};