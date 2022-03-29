import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as NBE from 'native-base';
import {Container, Box, Button} from './../../component/layout';

export const IndexInfoPajak = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('data-pajak', {
      id: 1,
    });
  };

  return (
    <NBE.Box>
      <Container title="Cek Pajak Kendaraan">
        <Box>
          <NBE.Text color="primary.contarastext">Pilih Wilayah :</NBE.Text>
          <NBE.Select
            mt="2"
            color="primary.contarastext"
            borderColor={'primary.100'}>
            <NBE.Select.Item label="Makassar" />
          </NBE.Select>

          <NBE.Text color="text" mt="4" mb="2">
            Masukkan Nopol :
          </NBE.Text>
          <NBE.Input
            placeholder="DD3100SS"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />

          <NBE.HStack color="text" mt="4" mb="2">
            <NBE.Text>Masukkan No. Rangka :</NBE.Text>
            <NBE.Text ml="2" fontSize={'12'} color="#373737">
              (5 Angka Terakhir)
            </NBE.Text>
          </NBE.HStack>
          <NBE.Input
            placeholder="DD3100SS"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />
        </Box>

        <Button onPress={handlePress}>CEK PAJAK</Button>
      </Container>
    </NBE.Box>
  );
};

export * from './dataPajak';
