import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import * as PropTypes from 'prop-types';
import { InferProps } from 'prop-types';

export interface MainLayoutProps {
  title: string;
}

export const MainLayout = ({
  title,
  children,
}: InferProps<typeof MainLayout.propTypes>): ReactElement => (
  <html>
    <head>
      <title>{title}</title>
    </head>
    <body>
      <h1>{title}</h1>
      {children}
    </body>
  </html>
);
MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

/*export function Article({
  title,
  price,
}: InferProps<typeof Article.propTypes>): ReactElement {
  return (
    <div className="article">
      <h1>{title}</h1>
      <span>Priced at (incl VAT): {price * 1.2}</span>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};*/

/*const userPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

const userDefaultProps = {
  name: 'Test',
};

export const User = (props /!*: PropTypes? *!/) => {
  return (
    <div>
      id: {props.id}
      name: {props.name}
      status: {props.active ? 'active' : 'inactive'}
    </div>
  );
};

User.defaultProps = userDefaultProps;*/
