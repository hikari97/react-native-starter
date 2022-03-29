import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as NBE from 'native-base';
import {Container, Box, Button} from './../../component/layout';

export const IndexDataPembayaran = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('info-data-pembayaran', {
      id: 1,
    });
  };

  return (
    <NBE.Box>
      <Container title="Cek Pembayaran E-Samsat">
        <Box>
          <NBE.Text color="text" mt="4" mb="2">
            Masukkan NIK :
          </NBE.Text>
          <NBE.Input
            placeholder="Masukkan NIK Anda"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />

          <NBE.Text color="text" mt="4" mb="2">
            Masukkan Kode Bayar :
          </NBE.Text>
          <NBE.Input
            placeholder="Masukkan Kode Bayar Anda"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />
        </Box>

        <Button onPress={handlePress}>PROSES</Button>
      </Container>
    </NBE.Box>
  );
};

export * from './dataBayar';
