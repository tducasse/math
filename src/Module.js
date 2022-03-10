import { useParams } from 'react-router-dom';
import { modules } from './modules';

export const Module = () => {
  const { name } = useParams();
  const mod = modules[name];

  const onSubmit = params => {
    console.log(params);
  };

  if (!mod) return null;

  return <mod.Settings onSubmit={onSubmit} name={name} />;
};
