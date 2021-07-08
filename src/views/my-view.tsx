import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { MainLayout } from './layouts/main';
import * as PropTypes from 'prop-types';
import { InferProps } from 'prop-types';

export interface MyViewProps {
  name: string;
  title: string;
}

const MyView = ({
  name,
  ...props
}: InferProps<typeof MyView.propTypes>): ReactElement => (
  <MainLayout {...props}>
    <div>Hello {name}</div>
    <div>next div</div>
  </MainLayout>
);
MyView.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyView;
