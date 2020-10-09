import React, { useContext, createContext } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';

const Context = createContext({
  memos: [],
});

const Provider = (props) => {
  const { children } = props;
  const [rows, setRows] = useLocalStorage('memos', [
    { id: '4', companyName: 'Google', email: 'johndoe@gmail.com', password: '123456789', completed: false },
  ]);
  const removeMemo = (id) => {
    const newMemos = rows.filter((m) => m.id !== id);
    setRows(newMemos)
  };
  const toggleMemo = (id) => {
    const foundMemo = rows.find((m) => m.id === id);
    if (foundMemo) {
      foundMemo.completed = !foundMemo.completed
    };
    const newMemos = rows.map((m) => {
      if (m.id === id) {
        return foundMemo;
      }
      return m;
    });
    setRows(newMemos)
  };
  return (
    <Context.Provider value={{ rows, setRows, removeMemo, toggleMemo }}>
      {children}
    </Context.Provider>
  )
};

export const useMemos = () => useContext(Context);

export const withProvider = (Component) => {
  return (props) => {
    return <Provider> <Component {...props} /> </Provider>
  };
};