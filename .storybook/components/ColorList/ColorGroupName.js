import React from 'react';
import tw, { styled, css } from 'twin.macro';

import { COLOR_GROUP_NAMES } from '../constants';

const Container = styled.div(() => tw`w-32 flex-shrink-0`);
const Name = styled.div(() => tw`text-sm font-semibold text-gray-900`);
const Code = styled.code(() => tw`text-xs text-gray-500`);

const ColorGroupName = ({ itemPosition }) => (
  <Container>
    <Name>{COLOR_GROUP_NAMES[itemPosition].name}</Name>
    <Code>{COLOR_GROUP_NAMES[itemPosition].description}</Code>
  </Container>
);

export default ColorGroupName;
