import { useParams } from 'react-router-dom';
import { modules } from '../modules';

export const Play = ({ questions }) => {
  const { name } = useParams();
  const mod = modules[name];

  return <mod.Play questions={questions} />;
};
