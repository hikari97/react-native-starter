import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as NBE from 'native-base';
import {Container, Box, Button} from './../../component/layout';

export const IndexMekanismeLayanan = ({navigation}) => {
  return (
    <NBE.Box>
      <Container title="Mekanisme Pelayanan">
        <NBE.FlatList
          data={listLayanan}
          renderItem={({item}) => (
            <TouchableOpacity>
              <NBE.HStack
                alignItems={'center'}
                bg="#fff"
                mb="4"
                p="3"
                borderRadius={'10'}
                shadow={2}>
                <NBE.Box
                  p="2"
                  bg="#E1E1E1"
                  mr="3"
                  w="50px"
                  h="50px"
                  alignItems={'center'}
                  borderRadius={'10'}
                  justifyContent="center">
                  <NBE.Image
                    resizeMode="cover"
                    source={require('../../asset/icon/lock.png')}
                    alt={item.title}
                  />
                </NBE.Box>
                <NBE.Text color="primary.contarastext">{item.title}</NBE.Text>
              </NBE.HStack>
            </TouchableOpacity>
          )}
        />
      </Container>
    </NBE.Box>
  );
};

const listLayanan = [
  {id: 1, title: 'PENGESAHAN 1 TAHUN', screen: 'pengesahan-1-tahun'},
  {
    id: 2,
    title: 'PENGESAHAN 5 TAHUN (GANTI PLAT)',
    screen: 'pengesahan-5-tahun',
  },
  {
    id: 3,
    title: 'BEA BALIK NAMA (BBN II)',
    screen: 'bea-balik-nama',
  },
  {
    id: 4,
    title: 'STNK HILANG / RUSAK',
    screen: 'stnk-hilang-rusak',
  },
  {
    id: 5,
    title: 'MUTASI MASUK',
    screen: 'mutasi-masuk',
  },
  {
    id: 6,
    title: 'MUTASI KELUAR',
    screen: 'mutasi-keluar',
  },
];
