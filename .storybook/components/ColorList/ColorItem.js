import React from 'react';
import tw, { styled, css } from 'twin.macro';

const ColorsContainer = styled.div(
  () =>
    tw`min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2`
);

const ColorsTest = styled.div(() => tw`space-y-1.5`);

const Color = styled.div(({ colorCode }) => [
  css`
    background-color: ${colorCode};
  `,
  tw`h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0`,
]);
const ColorInfo = styled.div(
  () =>
    tw`px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block`
);

const ColorName = styled.div(() => tw`w-6 font-medium text-gray-900`);

const ColorItem = ({ color }) => (
  <ColorsContainer>
    {Object.entries(color).map(([name, code]) => {
      return (
        <ColorsTest key={name}>
          <Color colorCode={code} />
          <ColorInfo>
            <ColorName>{name}</ColorName>
            <div>{code}</div>
          </ColorInfo>
        </ColorsTest>
      );
    })}
  </ColorsContainer>
);

export default ColorItem;
