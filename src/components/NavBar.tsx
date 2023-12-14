import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image src={logo} boxSize={"60px"} />
            <HStack>
                <Text fontSize={"5xl"} fontWeight={"bold"}>
                    Game Hub
                </Text>
                <Text fontSize={"sm"} paddingTop={"30px"}>
                    Created By : Mohamed Adel
                </Text>
            </HStack>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
