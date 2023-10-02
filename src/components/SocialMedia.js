import React from "react";
import { HStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <HStack spacing={24}>
      <Icon as={FaFacebookF} boxSize={50} />
      <Icon as={FaYoutube} boxSize={50} />
      <Icon as={FaInstagram} boxSize={50} />
      <Icon as={FaTwitter} boxSize={50} />
    </HStack>
  );
};

export default SocialMedia;
