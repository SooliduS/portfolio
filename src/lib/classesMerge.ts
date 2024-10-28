import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const classesMerge = (...classes: ClassValue[]) => twMerge(clsx(classes))
