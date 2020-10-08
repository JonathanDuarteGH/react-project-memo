import React from 'react';
import TextField from '@material-ui/core/TextField';

export const MemoField = ({ placeholder, field }) => {
  return (
    <TextField
      placeholder={placeholder} {...field}
    />
  );
};
