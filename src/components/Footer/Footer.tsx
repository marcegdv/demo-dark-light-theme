import React from 'react';
import styles from './Footer.styles';

export type FooterProps = {
    children?: JSX.Element | JSX.Element[],
};

const Footer = (props: FooterProps): JSX.Element => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

export default Footer;