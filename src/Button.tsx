import * as React from 'react';
import './button.css';

export interface Props {
    /**
     * send children down the parent props.
     */
    children: React.ReactNode;
    /**
     * function that returns nothing.
     */
    onClick: () => void;
    /**
     * determines if the button is enabled or disabled.
     */
    disabled?: boolean
}

const noop = () => {};
export const Button = (props: Props) => {
    const {children, onClick, disabled} = props;
    const disabledClass = disabled ? 'Button_disabled' : '';
    return (
        <div
            className={`Button ${disabledClass}`}
            onClick={!disabled ? onClick : noop}
        >
            <span>{children}</span>
        </div>
    )
};