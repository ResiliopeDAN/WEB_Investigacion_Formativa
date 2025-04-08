import { HStack, VStack, useDisclosure } from "@chakra-ui/react";
import {LeftContent, RightContent} from "@/components/Home/header/Content.jsx";
import {NavBarMob} from "@/components/Home/header/nav-mob/index.jsx";
import {homeLinks} from "@/constants/links.jsx";
import {useState} from "react";



export function NavbarHo() {
    // const { isOpen, onToggle } = useDisclosure();
    const [isOpen, setOpen] = useState(false);

    const onToggle = () => setOpen(!isOpen);
    return (
        <VStack w="full" gap={0}>
            <HStack
                w="full"
                alignItems="center"
                p={2}
                justifyContent="space-between"
                borderBottomWidth={1}
            >
                {/* left content */}
                <LeftContent items={homeLinks} onToggle={onToggle}/>

                {/* right content */}
                <RightContent />
            </HStack>
        {/* mobile content */}
            <NavBarMob items={homeLinks} isOpen={isOpen} onToggle={onToggle}/>
        </VStack>
    );
}