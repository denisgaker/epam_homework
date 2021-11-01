import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { HeadingProps } from './Header.interface';

const Heading: React.FC<HeadingProps> = ({ name }: HeadingProps) => (
    <h1>
      <NavLink to={'/'}>{`${name}`}</NavLink>
    </h1>
);

export default Heading;
