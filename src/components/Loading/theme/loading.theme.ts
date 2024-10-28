import { cva } from 'class-variance-authority';

export const loadingTheme = cva('loading h-full',
  {
    variants: {
      type: {
        spinner: 'loading-spinner',
        ring: 'loading-ring'
      },
      size: {
        small: 'w-5',
        medium: 'w-6',
        normal: 'w-8',
        large: 'w-10',
      }
    },
    compoundVariants: [{}],
    defaultVariants: {
      type: 'ring',
      size: 'normal'
    }
  }
)
