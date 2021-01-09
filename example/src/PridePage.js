import {Text, Button, PrideBox, Layout, ModestLink} from 'nectar-gui'
import React from "react";

export default function PridePage() {
  return(
      <PrideBox title="Interface Showcase">
        <Text.P
          humane
          // textAlign={'center'}
          mt={2}
          maxWidth='290px'
          emotion={'white'}>
          Nectar UI elements expo for internal use only.
          If you're reading this, we raised a round.
        </Text.P>
        <ModestLink to={'page'}>
          <Button.Button
            borderRadius={'2px'}
            // centered
            mt={2}
            emotion='white'
            bkgEmotion='hipBlue'
          >
            Begin
          </Button.Button>
        </ModestLink>
      </PrideBox>
  )
}
