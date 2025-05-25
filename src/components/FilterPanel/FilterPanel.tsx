import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import styles from './FilterPanel.module.scss';
import classNames from 'classnames';

interface Props {
  authors: string[];
  onAuthorChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onCompletedToggle: (value: boolean) => void;
  search: string;
  completed: boolean;
  selectedAuthor: string;
  className?: string;
}

export const FilterPanel = ({ authors, onAuthorChange, onSearchChange, onCompletedToggle, search, completed, selectedAuthor, className }: Props) => {
  return (
    <div className={classNames(styles.panel, className)}>
      <Select options={authors} value={selectedAuthor} label="Все авторы" onChange={onAuthorChange} />
      <Input value={search} onChange={onSearchChange} />
      <Checkbox checked={completed} onChange={onCompletedToggle} label="Только завершённые" />
    </div>
  );
};
