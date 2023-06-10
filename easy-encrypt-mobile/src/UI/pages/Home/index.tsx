import SlideUp from 'src/UI/base/Animations/SlideUp';
import EncryptPanel from 'src/UI/components/EncryptPanel';
import PageContainer from 'src/UI/components/PageContainer';
import useLangContext from 'src/hooks/useLangContext';

const HomePage = () => {
  const [lang] = useLangContext();

  return (
    <PageContainer>
      <SlideUp>
        <EncryptPanel lang={lang} />
      </SlideUp>
    </PageContainer>
  );
};

export default HomePage;
