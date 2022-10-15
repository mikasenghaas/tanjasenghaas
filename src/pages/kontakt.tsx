import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Box, Divider, Heading, Text } from '@chakra-ui/react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaXingSquare } from 'react-icons/fa'

import ExternalLink from '@/components/external-link'
import { useResponsiveFontSize } from '@/lib/responsive'
import useThemeColors from '@/lib/useThemeColors'

const Contact: NextPage = () => {
  const { sm, md, lg } = useResponsiveFontSize()
  const { primary, secondary } = useThemeColors()

  return (
    <>
      <Head>
        <title>Kontakt | Tanja Senghaas</title>
        <meta name="Kontakt | Tanja Senghaas" content="Treten Sie mit Tanja Senghaas über e-Mail oder Social Media Kanäle in Kontakt." />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex pt={40} direction={{ base: 'column', md: 'row' }} justify={{ base: 'left', md: 'space-between' }}>
        <Box>
          <Heading fontSize={lg} mb={10} color={primary}>Kontakt</Heading>
          <Heading fontSize={lg} fontWeight={900} color={primary} mb={5}>Tanja Senghaas Designs.</Heading>
          <Flex>
            <Text color={secondary} mr={1}>Sag Hallo</Text>
            <ExternalLink href='mailto:tanja.senghaas@web.de' isExternal><Text fontSize={md}>tanja.senghaas@web.de</Text></ExternalLink>
          </Flex>
          <Flex>
            <Text color={secondary} mr={1}>Oder ruf an</Text>
            <ExternalLink href='tel:+4915122543476'><Text fontSize={md}>+49 (0) 151 22543476</Text></ExternalLink>
          </Flex>
          <Divider my={5} />
          <Flex mb={1} alignItems='center'>
            <AiFillLinkedin style={{ height: 25, width: 25, marginLeft: -1 }} />
            <ExternalLink href='https://www.linkedin.com/in/tanja-senghaas-thomsen-1b224371/' isExternal><Text fontSize={md} ml={2}>@Tanja Senghaas Thomsen</Text></ExternalLink>
          </Flex>
          <Flex alignItems='center'>
            <FaXingSquare style={{ height: 23, width: 23 }} />
            <ExternalLink href='https://www.xing.com/profile/Tanjas_SenghaasThomsen' isExternal><Text fontSize={md} ml={2}>@Tanja Senghaas-Thomsen</Text></ExternalLink>
          </Flex>
        </Box>
        <Box color={secondary} >
          <Heading color={primary} fontSize={lg} mb={10} mt={{ base: 20, md: 0 }}>Danke!</Heading>
          <Heading fontSize={sm} fontWeight={900}>Nele Martensen</Heading>
          <Text mb={5} fontSize={sm}>für die schönen Fotos dieser Website</Text>
          <ExternalLink href='https://www.nele-martensen.de' isExternal><Text fontSize={sm}>nele-martensen.de</Text></ExternalLink>
          <ExternalLink href='mailto:mail@nele-martensen.de' isExternal><Text fontSize={sm}>mail@nele-martensen.de</Text></ExternalLink>
          <ExternalLink href='tel:+491717872315' ><Text fontSize={sm}>+49 (0) 171 7872315</Text></ExternalLink>

          <Heading fontSize={sm} fontWeight={900} mt={20}>Mika Senghaas</Heading>
          <Text mb={5} fontSize={sm}>für die Erstellung meiner Website</Text>
          <ExternalLink href='https://www.jonas-mika.de' isExternal ><Text fontSize={sm}>jonas-mika.de</Text></ExternalLink>
          <ExternalLink href='mailto:contact@jonas-mika.de' isExternal ><Text fontSize={sm}>contact@jonas-mika.de</Text></ExternalLink>
          <ExternalLink href='tel:+4560740477' ><Text fontSize={sm}>+45 60740477</Text></ExternalLink>
        </Box>
      </Flex>
    </>
  )
}

export default Contact
