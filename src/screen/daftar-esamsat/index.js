import React from 'react';
import * as NBE from 'native-base';
import {Container, Box, Button} from './../../component/layout';

export const IndexDaftarESamsat = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('data-e-samsat', {
      id: 1,
    });
  };

  return (
    <NBE.ScrollView>
      <Container title="Pendaftaran E-Samsat">
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
            placeholder="Masukkan Nopol"
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
            placeholder="Masukkan No. Rangka"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />

          <NBE.Text color="text" mt="4" mb="2">
            Masukkan No. KTP :
          </NBE.Text>
          <NBE.Input
            placeholder="Masukkan No. KTP"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />

          <NBE.Text color="text" mt="4" mb="2">
            Masukkan No. Handphone :
          </NBE.Text>
          <NBE.Input
            placeholder="Masukkan No. Handphone"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />

          <NBE.Text color="text" mt="4" mb="2">
            Masukkan Email :
          </NBE.Text>
          <NBE.Input
            placeholder="Masukkan Email :"
            borderColor={'primary.100'}
            borderWidth={1}
            _focus={{borderColor: 'primary.100'}}
          />
        </Box>

        <Button onPress={handlePress}>PROSES</Button>
      </Container>
    </NBE.ScrollView>
  );
};

export * from './dataESamsat';
