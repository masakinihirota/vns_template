import cn from 'classnames';
import React, { InputHTMLAttributes, ChangeEvent } from 'react';

import s from './Input.module.css';

interface Props extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  className?: string;
  onChange: (value: string) => void;
}
const Input = (props: Props) => {
  const { className, children, onChange, ...rest } = props;

  const rootClassName = cn(s.root, {}, className);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <label>
      <input
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        className={rootClassName}
        onChange={handleOnChange}
        spellCheck="false"
        {...rest}
      />
    </label>
  );
};

export default Input;
