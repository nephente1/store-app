import { TopHeader } from '@/app/components/TopHeader/TopHeader';
import { ContentContainer, PageContainer } from '@/app/styles/styles';
import Head from 'next/head';


export const PageView = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <TopHeader />
      <PageContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </PageContainer>
    </>
  );
}