import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Body from '../Comps/Body';
import styled from 'styled-components';

const Container = styled.div`
padding: 0 2vw;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Seoyoung JEEEEEE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body></Body>
    </Container>
  )
}



