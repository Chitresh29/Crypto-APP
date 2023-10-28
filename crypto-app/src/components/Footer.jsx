import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/72180031?v=4";
const avatarLink='http://www.linkedin.com/in/chitresh-jain-48ba00135';
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
         
        <VStack>
          <a href={avatarLink} target="_blank" rel="noopener noreferrer">
            <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} filter={"grayscale(1)"}/>
          </a>
          <Text>Our Founder</Text>
          <Text>Chitresh Jain</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
