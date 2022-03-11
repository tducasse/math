import { useNavigate, useParams } from 'react-router-dom';
import { modules } from '../modules';

export const Settings = ({ setQuestions }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  const mod = modules[name];

  const onSubmit = params => {
    setQuestions(mod.getQuestions(params));
    navigate(`/${name}/play`);
  };

  return <mod.Settings onSubmit={onSubmit} />;
};
