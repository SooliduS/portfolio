import { forwardRef } from 'react';
import { ButtonProps } from './@types/button-props.type';
import { buttonTheme } from './theme/button.theme';
import { classesMerge } from '@/lib/classesMerge';
import { Loading } from '../Loading';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant,
            size,
            fullWidth,
            className,
            disabled,
            rounded,
            loading,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={classesMerge(
                    buttonTheme({
                        variant,
                        size,
                        fullWidth,
                        disabled,
                        rounded,
                        className,
                    })
                )}
                {...props}>
                {loading ? <Loading /> : children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
