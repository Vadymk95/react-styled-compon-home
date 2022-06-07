import React, { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect';
import Search from './Search';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Amerika', label: 'Amerika' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Controls = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
      />
    </div>
  );
};

export default Controls;
