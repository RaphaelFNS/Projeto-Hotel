import { Box, Text, TextProps } from '@chakra-ui/react';

type LogoProps = TextProps;

export const Logo = ({ ...rest }: LogoProps) => (
  <Text fontSize={'2xl'} fontWeight='normal' color='gray.900' {...rest}>
    Hotel
    <Text as='span' color='#007FFF' ml='2' fontWeight='bold'>
      Santos Beachfront
    </Text>
  </Text>
);
