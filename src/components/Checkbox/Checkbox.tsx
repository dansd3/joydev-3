import styles from './Checkbox.module.scss';
import { Text } from '../Text/Text';
import classNames from 'classnames';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export const Checkbox = ({ checked, onChange, label, className }: CheckboxProps) => {
  return (
    <label className={classNames(styles.checkbox, className)}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className={styles.checkbox__input} />
      <Text size={500}>{label}</Text>
    </label>
  );
};
