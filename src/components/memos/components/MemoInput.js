import React from 'react';
import MemoForm from './MemoForm';
import MemoTable from './MemoTable';
import { generate } from 'shortid';
import { useMemos } from '../store/Store';


const MemoInput = () => {
  const { rows, setRows, removeMemo, toggleMemo } = useMemos();
  return (
    <div style={{ textAlign: 'center' }}>
      <MemoForm
        onSubmit={(data) => {
          console.log(data)
          setRows(currentRows => [
            {
              id: generate(),
              ...data
            },
            ...currentRows
          ]);
        }}
      />
      <MemoTable rows={rows} removeMemo={removeMemo} toggleMemo={toggleMemo}
      />
    </div>
  );
};
export default MemoInput;