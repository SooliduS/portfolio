import { forwardRef } from 'react';
import { LoadingProps } from './@types/loding-props.type';
import { classesMerge } from '@/lib/classesMerge';
import { loadingTheme } from './theme/loading.theme';

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
    ({ className, size, type, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={classesMerge(
                    loadingTheme({ size, type, className })
                )}
                {...props}
            />
        );
    }
);

Loading.displayName = 'Loading';

export default Loading;
