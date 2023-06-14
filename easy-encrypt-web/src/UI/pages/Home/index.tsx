import EncryptPanel from 'src/UI/components/EncryptPanel';
import PageContainer from 'src/UI/components/PageContainer';
import useLangContext from 'src/hooks/useLangContext';

const HomePage = () => {
  const [lang] = useLangContext();

  return (
    <PageContainer>
      <EncryptPanel lang={lang} />
    </PageContainer>
  );
};

export default HomePage;
