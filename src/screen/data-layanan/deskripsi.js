import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as NBE from 'native-base';
import {Container, Box, Button} from './../../component/layout';
import Icon from 'react-native-vector-icons/AntDesign';

export const IndexListDaftarLayanan = ({navigation}) => {
  return (
    <NBE.Box>
      <Container title="Daftar Layanan Samsat">
        <NBE.FlatList
          data={listLayanan}
          renderItem={({item}) => (
            <TouchableOpacity>
              <NBE.Box bg="#fff" mb="4" p="3" borderRadius={'10'} shadow={2}>
                <NBE.HStack alignItems={'center'}>
                  <NBE.Box width={'90%'}>
                    <NBE.Text color="primary.contarastext" bold>
                      {item.title}
                    </NBE.Text>
                    <NBE.Text color="gray.400" fontSize={'12px'}>
                      {item.alamat}
                    </NBE.Text>
                  </NBE.Box>
                  <NBE.Box width={'5%'}>
                    <Icon name="caretright" color="#000" size={18} />
                  </NBE.Box>
                </NBE.HStack>
              </NBE.Box>
            </TouchableOpacity>
          )}
        />
      </Container>
    </NBE.Box>
  );
};

const listLayanan = [
  {
    id: 1,
    title: 'SAMSAT STATIONARE MAKASSAR 1',
    alamat: 'Jl. Andi Mappanyuki No. 79',
  },
  {
    id: 2,
    title: 'SAMSAT STATIONARE MAKASSAR 2',
    alamat: 'Jl. Pajjaiyang No. 28',
  },
  {
    id: 3,
    title: 'Gerai SAMSAT BAROMBONG',
    alamat: 'Jl. Andi Mappanyukki No 79',
  },
  {
    id: 4,
    title: 'KEDAI SAMSAT HERTASING',
    alamat: 'Jl. Andi Mappanyukki No 79',
  },
];
