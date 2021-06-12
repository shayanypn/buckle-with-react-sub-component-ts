import React, { PropsWithChildren, ReactElement, ValidationMap, WeakValidationMap } from 'react';

interface IProps {
    children: React.ReactNode;
}

interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
    Header: React.FunctionComponent<any>;
    Body: React.FunctionComponent<any>;
    Footer: React.FunctionComponent<any>;
}

const Card: FunctionComponent<IProps> = ({ children }) => {
  const header = React.Children.map(children, (child:any) => child.type.displayName === 'Header' ? child : null);
  const body = React.Children.map(children, (child:any) => child.type.displayName === 'Body' ? child : null);
  const footer = React.Children.map(children, (child:any) => child.type.displayName === 'Footer' ? child : null);
  return (
    <div className="card">
      {header}
      <div className="card-body">
        {body}
      </div>
      <div className="card-footer">
        {footer}
      </div>
    </div>
  );
}

const Header: React.FC<any> = ({ children }) => children;
Header.displayName = 'Header';
Card.Header = Header;

const Body: React.FC<any> = ({ children }) => children;
Body.displayName = 'Body';
Card.Body = Body;

const Footer: React.FC<any> = ({ children }) => children;
Footer.displayName = 'Footer';
Card.Footer = Footer;

export default Card;