import React, { ChangeEvent } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [state, setState] = React.useState({
    seenIndexes: [],
    values: {},
    value: ''
  });

  React.useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchValues = async () => {
    const { data } = await axios.get('/api/values/current');
    setState(p => ({ ...p, values: data }));
  };

  const fetchIndexes = async () => {
    const { data } = await axios.get('/api/values/all');
    setState(p => ({ ...p, seenIndexes: data }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await e.preventDefault();
    await axios.post('/api/values', { value: state.value });
    setState(p => ({ ...p, value: '' }));
    await Promise.all([fetchValues(), fetchIndexes()]);
  };

  const renderSeenIndexes = () => {
    return state.seenIndexes.map((i: any) => i.number).join(', ');
  };

  const renderValues = () => {
    return Object.entries(state.values).map(v => {
      return (
        <div key={v[0]}>
          For index {v[0]} i Calculated {v[1]}
        </div>
      );
    });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setState(p => ({ ...p, value: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Enter your index:</label>
        <input type="text" value={state.value} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen</h3>
      {renderSeenIndexes()}
      <h3>Calculated values</h3>
      {renderValues()}
    </div>
  );
};

export default MainPage;
