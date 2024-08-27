import { TopHeader } from '@/app/components/TopHeader/TopHeader';
import { ContentContainer, PageContainer } from '@/app/styles/styles';

export const PageView = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopHeader />
      <PageContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </PageContainer>
    </>
  );
}