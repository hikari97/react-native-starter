import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as NBE from 'native-base';
import {Container, Box, Button} from './../../component/layout';

export const IndexDaftarLayanan = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('list-daftar-layanan', {
      id: 1,
    });
  };

  return (
    <NBE.Box>
      <Container title="Daftar Layanan Samsat">
        <Box>
          <NBE.Text color="primary.contarastext">Pilih Wilayah :</NBE.Text>
          <NBE.Select
            mt="2"
            color="primary.contarastext"
            borderColor={'primary.100'}>
            <NBE.Select.Item label="Makassar" />
          </NBE.Select>
        </Box>

        <Button onPress={handlePress}>PROSES</Button>
      </Container>
    </NBE.Box>
  );
};

export * from './deskripsi';
