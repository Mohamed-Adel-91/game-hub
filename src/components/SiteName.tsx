import { HStack, Text } from '@chakra-ui/react'


const SiteName = () => {
  return (
    <HStack>
    <Text fontSize={"4xl"} fontWeight={"bold"}>
        Game Hub
    </Text>
    <Text fontSize={"sm"} paddingTop={"20px"}>
        Created By : Mohamed Adel
    </Text>
</HStack>
  )
}

export default SiteName