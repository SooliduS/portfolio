import { cva } from 'class-variance-authority'

export const buttonTheme = cva('rounded-full duration-200 outline-none hover:text-blue-500', {
  variants: {
    variant: {
      primary:'bg-foreground text-background border border-background ',
      secondary:' text-foreground border border-foreground hover:bg-gray-600'
    },
    size: {
      small: 'px-4 h-8 font-normal text-sm',
      medium: 'px-4 h-10 font-normal text-sm',
      normal: 'px-4 h-12 font-normal text-base',
      large: 'px-10 h-14 font-normal text-lg',
    },
    fullWidth: {
      true: 'w-full',
    },
    rounded: {
      true: 'rounded-full',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [

    {
      disabled: true,
      variant: 'primary',
      className:
        'bg-gray-100 hover:bg-gray-100 active:bg-gray-100 text-gray-400 disabled:text-gray-400',
    },

    {
      disabled: true,
      variant: 'secondary',
      className: 'bg-transparent text-gray-100 hover:text-gray-100 active:text-gray-100',
    },

  ],
  defaultVariants: {
    variant: 'primary',
    size: 'normal',
    fullWidth: false,
    rounded: false,
    disabled: false,
  },
})
