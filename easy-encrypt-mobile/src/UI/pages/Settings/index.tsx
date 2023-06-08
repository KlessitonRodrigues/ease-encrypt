import Input from 'src/UI/base/Input';
import PageContainer from 'src/UI/components/PageContainer';

const SettingsPage = () => {
  return (
    <PageContainer>
      <Input label="Input 1" />
      <Input label="Input 2" />
      <Input label="Input 3" />
      <Input label="Input 4" />
    </PageContainer>
  );
};

export default SettingsPage;
