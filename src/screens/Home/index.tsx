import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../navigation/types';

import {Container, Button, Text, SafeArea} from '../../components/styled';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigationProps>();

  const handleOnPress = useCallback(() => {
    navigation.navigate('Detail');
  }, [navigation]);

  return (
    <SafeArea>
      <Container flex={1} flex-jc={'flex-start'} padding={35}>
        <Container flex-d={'row'} flex-jc={'center'}>
          <Button onPress={handleOnPress}>
            <Text>Button 1</Text>
          </Button>
        </Container>
      </Container>
    </SafeArea>
  );
};

export default HomeScreen;
