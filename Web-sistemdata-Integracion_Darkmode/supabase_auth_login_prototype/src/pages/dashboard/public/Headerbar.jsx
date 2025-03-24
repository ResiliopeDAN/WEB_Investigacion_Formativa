import { Tabs } from "@chakra-ui/react"
import { LuSquareCheck } from "react-icons/lu"
import TemperaturasTable from "@/graphics/TablaChart.jsx";
import TemperaturasChart from "@/graphics/BarsChart.jsx";
import { IoDocumentOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import {Box} from "@chakra-ui/react";

const Headerbar = () => {

    return (

        <Tabs.Root defaultValue="dates">
            <Box width="100%">
                <Tabs.List>
                    <Tabs.Trigger value="dates">
                        <IoDocumentOutline/>

                    </Tabs.Trigger>
                    <Tabs.Trigger value="graphic">
                        <BsBarChart/>

                    </Tabs.Trigger>
                    <Tabs.Trigger value="notification">
                        <LuSquareCheck />

                    </Tabs.Trigger>

                </Tabs.List>
                <Tabs.Content value="dates" ><TemperaturasTable/></Tabs.Content>
                <Tabs.Content value="graphic"  w="full"><TemperaturasChart/></Tabs.Content>
                <Tabs.Content value="tasks"><TemperaturasChart/></Tabs.Content>
            </Box>
        </Tabs.Root>

    )
}

export default Headerbar;
