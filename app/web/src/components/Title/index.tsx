import React from 'react';

interface Props {
  children?: React.ReactNode;
  level?: '1' | '2' | '3' | '4' | '5';
}
export default function Title({ children, level = '1' }: Props) {
  return React.createElement(`h${level}`, null, children);
}
