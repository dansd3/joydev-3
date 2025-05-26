import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Input = ({ value, onChange, className }: InputProps) => {
  return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Введите ключевые слова" className={classNames(styles.input, className)} />;
};
