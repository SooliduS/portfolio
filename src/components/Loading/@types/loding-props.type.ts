import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { loadingTheme } from '../theme/loading.theme'

export type LoadingProps = ComponentProps<'span'> & VariantProps<typeof loadingTheme>
