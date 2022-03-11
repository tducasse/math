import { useParams } from 'react-router-dom';
import { modules } from '../modules';

export const Play = () => {
  const { name } = useParams();
  const mod = modules[name];

  if (!mod) return null;

  return <mod.Play />;
};
