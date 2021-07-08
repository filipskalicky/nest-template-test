import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { MainLayout } from './layouts/main';

export interface MyViewProps {
  name: string;
  title: string;
}

const Homepage = ({ name, ...props }: MyViewProps): ReactElement => (
  <div>
    <h1>this is {props.title}</h1>
    <div>Hello {name}</div>
    <div>next div</div>
  </div>
);

export default Homepage;
