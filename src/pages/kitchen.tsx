import { Button, Container } from '@chakra-ui/react';
import Head from 'next/head';

export default function Kitchen() {
  return (
    <>
      <Head>
        <title>eCommerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Button size={'sm'}>Button</Button>
        <Button>Button</Button>
        <Button size="lg">Button</Button>
        <Button size="xl">Button</Button>
      </Container>
      <Container>
        <Button variant={'outline'} size={'sm'}>
          Button
        </Button>
        <Button variant={'outline'}>Button</Button>
        <Button variant={'outline'} size="lg">
          Button
        </Button>
        <Button variant={'outline'} size="xl">
          Button
        </Button>
      </Container>
    </>
  );
}