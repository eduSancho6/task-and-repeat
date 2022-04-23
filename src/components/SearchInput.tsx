import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.FormEvent) => void;
}

const SearchInput: React.FC<Props> = ({ todo, setTodo, addTask }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='form'
      onSubmit={(e) => {
        addTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='input'
        placeholder='Write your next mission to success'
        className='search_input'
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <button type='submit' className='search_button'>
        Let's GO
      </button>
    </form>
  );
};

export default SearchInput;
