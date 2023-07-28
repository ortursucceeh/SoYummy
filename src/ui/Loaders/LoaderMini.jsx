import { ColorRing } from 'react-loader-spinner';

function LoaderMini() {
  return (
    <ColorRing
      visible={true}
      height="30%"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['white', 'white', 'white', 'white', 'white', 'white']}
    />
  );
}

export default LoaderMini;
