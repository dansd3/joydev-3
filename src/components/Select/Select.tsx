import classNames from 'classnames';
import styles from './Select.module.scss';

interface SelectProps {
  options: string[];
  value: string;
  label: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Select = ({ options, value, label, onChange, className }: SelectProps) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={classNames(styles.select, className)}>
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
