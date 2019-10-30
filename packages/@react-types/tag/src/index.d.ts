import {DOMProps, MultipleSelectionBase, Removable} from '@react-types/shared';
import {ReactChild, ReactElement, ReactNode} from 'react';

export interface TagProps extends DOMProps, Removable<ReactChild, void> {
  children?: ReactNode,
  icon?: ReactElement,
  isDisabled?: boolean,
  validationState?: 'invalid' | 'valid'
}

export interface TagGroupProps extends DOMProps, MultipleSelectionBase {
  children: ReactElement<TagProps> | ReactElement<TagProps>[],
  isDisabled?: boolean
  isReadOnly?: boolean,
  onRemove?: (items: any[]) => void,
  validationState?: 'invalid' | 'valid'
}