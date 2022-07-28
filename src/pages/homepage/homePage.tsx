import * as React from 'react';
import Heading from '../../componetns/heading/heading';
import Text from '../../componetns/text/text';
import Button from '../../componetns/button/button';
import Upload from '../../componetns/form/upload';
import Input from '../../componetns/form/input';
import Card from '../../componetns/card/card';
import Header from '../../componetns/header/header';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Heading>Hello</Heading>
      <Text>Hello</Text>
      <Button>sdasd</Button>
      <Upload/>
      <Input name="test" label="Label" helperText="help"/>
      <Card title="Salvador Stewart Flynn Thomas Anderson"
            imageURL="https://thispersondoesnotexist.com/image"
            description={[
              'Forntend Developer Frontend Developer',
              'something@gmail.com',
              '+380631761854',
            ]}/>
    </div>
  );
};

export default HomePage;
