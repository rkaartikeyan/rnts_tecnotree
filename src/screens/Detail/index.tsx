import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../navigation/types';

import {Container, Button, Text, SafeArea} from '../../components/styled';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigationProps>();

  const handleOnPress = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <SafeArea>
      <Container flex={1} flex-jc={'flex-end'} padding={35}>
        <Container flex-d={'row'} flex-jc={'center'}>
          <Button onPress={handleOnPress}>
            <Text>Go Back</Text>
          </Button>
        </Container>
      </Container>
    </SafeArea>
  );
};

export default HomeScreen;
