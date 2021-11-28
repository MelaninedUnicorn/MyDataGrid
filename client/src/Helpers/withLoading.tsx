import Loading from '../Components/Loading/Loading';
import React from 'react';

interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <Loading /> : <Component {...(props as P)} />;
    }
  };

export default withLoading;
