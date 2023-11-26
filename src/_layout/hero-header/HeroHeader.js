import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Hero from "./Hero";
import HeroImage from "./HeroImage";


export default function HeroHeader({ data }) {

  data.attributes.pageColor && data.attributes.pageColor == 'neutralWhite' ? 
  data.attributes.pageColor && data.attributes.pageColor == 'neutralLight' 
: data.attributes.pageColor = data.attributes.pageColor

  return (
    <Box background={data.attributes.pageColor + '.background'}>
      <Header data={data} />
      <Hero data={data} />
      {
        data.attributes.heroImage ?
        <HeroImage data={data} /> 
        : null
      }
    </Box>
    
  )
}