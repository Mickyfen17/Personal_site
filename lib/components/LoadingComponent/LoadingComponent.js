import Loadable from 'react-loadable';
import Loader from './Loader';

const LoadingComponent = func =>
  Loadable({
    loader: func,
    loading: Loader,
    delay: 2000,
  });

export default LoadingComponent;
