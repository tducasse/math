import { useNavigate, useParams } from 'react-router-dom';
import { modules } from '../modules';

export const Settings = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const mod = modules[name];

  const onSubmit = params => {
    console.log(params);
    navigate(`/${name}/play`);
  };

  if (!mod) return null;

  return <mod.Settings onSubmit={onSubmit} name={name} />;
};
