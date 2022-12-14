import {useState} from 'react';
import CustomModal from '../../components/modal';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Link from 'next/link';
import {Button} from 'react-bootstrap';

const firstPost = () => {

  const [name, setName] = useState('asfand');

  const renderMeta = () => {
    return (<div>
          <Head>
            <title>My page title</title>
            <meta name="viewport"
                  content="initial-scale=1.0, width=device-width"/>
            <meta property="og:title" content="My page title" key="title"/>
          </Head>
        </div>
    );

  };

  const renderModal = () => {
    return (
        <CustomModal/>
    );

  };

  const renderName = () => {
    return (
        <span>
          {renderModal()}
          {name}</span>
    );
  };

  const renderMain = () => {
    return (
        <div>
          {renderMeta()}
          <Link href={'/'} >
            <Button>
              Go Back
            </Button>
          </Link>
          created by:
          {renderName()}
        </div>
    );
  };

  return renderMain();
};

export default firstPost;