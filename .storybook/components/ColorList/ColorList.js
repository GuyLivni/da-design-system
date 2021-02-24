import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { TWIN_THEME_COLORS } from '../constants';
import ColorItem from './ColorItem';
import ColorGroupName from './ColorGroupName';

const Container = styled.div(() => tw`grid grid-cols-1 gap-8`);

const ColorGroup = styled.div(
  () =>
    tw`flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4`
);

const ColorList = () => (
  <Container>
    {TWIN_THEME_COLORS.map((colorObj, index) => (
      <ColorGroup key={index}>
        <ColorGroupName itemPosition={index} />
        <ColorItem color={colorObj} />
      </ColorGroup>
    ))}
  </Container>
);

export default ColorList;
