import { useParams } from 'react-router-dom';
import { getModule } from './modules';

export const Module = () => {
  const { name } = useParams();
  const mod = getModule(name);

  const onSubmit = params => {
    console.log(params);
  };

  return mod ? <mod.Settings onSubmit={onSubmit} name={name} /> : null;
};
