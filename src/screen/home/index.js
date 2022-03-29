import React from 'react';
import * as NBE from 'native-base';
import {TouchableOpacity} from 'react-native';

const VirtualizedView = props => {
  return (
    <NBE.FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
};

export const HomeIndex = ({navigation}) => {
  return (
    <VirtualizedView>
      <NBE.Box p="25px">
        <NBE.HStack alignItems={'center'}>
          <NBE.Box borderRadius={'100'} overflow="hidden" bg="white">
            <NBE.Image
              w="90"
              h="90"
              source={require('../../asset/logo-rounded.png')}
              alt="logo"
            />
          </NBE.Box>
          <NBE.Box ml="5">
            <NBE.Text fontSize={'2xl'} bold color="primary.contarastext">
              Bapsul Mobile
            </NBE.Text>
            <NBE.Text color="#b0b3ba">Bapenda SulSel in your hand...</NBE.Text>
          </NBE.Box>
        </NBE.HStack>
        <NBE.Box h="200" w="100%" mt="10" bg="amber.100" />
        <NBE.Box mt="10">
          <NBE.FlatList
            scrollEnabled={false}
            data={listData}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(item.screen, {
                    title: item.title,
                  })
                }>
                <NBE.HStack
                  alignItems={'center'}
                  bg="#fff"
                  mb="4"
                  p="3"
                  borderRadius={'10'}>
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
                      source={item.icon}
                      alt={item.title}
                    />
                  </NBE.Box>
                  <NBE.Text color="primary.contarastext">{item.title}</NBE.Text>
                </NBE.HStack>
              </TouchableOpacity>
            )}
          />
        </NBE.Box>
      </NBE.Box>
    </VirtualizedView>
  );
};

const listData = [
  {
    id: 1,
    icon: require('../../asset/icon/ic_motorcycle_24px.png'),
    title: 'INFO PAJAK KENDARAAN',
    screen: 'info-pajak',
  },
  {
    id: 2,
    icon: require('../../asset/icon/ic_card_membership_24px.png'),
    title: 'PENDAFTARAN E-SAMSAT',
    screen: 'pendaftaran-e-samsat',
  },
  {
    id: 3,
    icon: require('../../asset/icon/ic_my_location_24px.png'),
    title: 'DATA PEMBAYARAN',
    screen: 'data-pembayaran',
  },
  {
    id: 4,
    icon: require('../../asset/icon/ic_report_problem_24px.png'),
    title: 'DAFTAR PELAYANAN SAMSAT',
    screen: 'daftar-layanan',
  },
  {
    id: 5,
    icon: require('../../asset/icon/ic_people_24px.png'),
    title: 'MEKANISME PELAYANAN',
    screen: 'mekanisme-pelayanan',
  },
];
