import React from 'react';
import * as NBE from 'native-base';
import {Container, Box, Button} from './../../component/layout';

export const IndexDataPajak = () => {
  return (
    <NBE.ScrollView>
      <Container title="Data Pajak Kendaraan">
        <Box alignItems="center" p="3" mt="2">
          <NBE.Text color="primary.100">TOTAL PAJAK KENDARAAN</NBE.Text>
          <NBE.Text fontSize={'16'}>Rp. 433.500 </NBE.Text>
        </Box>
        <Box mt="5">
          <NBE.HStack justifyContent={'space-between'}>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Nopol</NBE.Text>
              <NBE.Text color="#000">DD 3100 SS</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Jenis</NBE.Text>
              <NBE.Text color="#000">SPD. MOTOR</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Merk</NBE.Text>
              <NBE.Text color="#000">YAMAHA</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Type</NBE.Text>
              <NBE.Text color="#000">3C1 (VISION/FZ150)</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Thn Buat</NBE.Text>
              <NBE.Text color="#000">2010</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Warna Kendaraan</NBE.Text>
              <NBE.Text color="#000">HITAM</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Bahan Bakar</NBE.Text>
              <NBE.Text color="#000">BENSIN</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Warna Plat</NBE.Text>
              <NBE.Text color="#000">HITAM</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">PKB Pokok</NBE.Text>
              <NBE.Text color="#000">238.500</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">PKB Denda</NBE.Text>
              <NBE.Text color="#000">0</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">SWDKLJJ Pokok</NBE.Text>
              <NBE.Text color="#000">35.000</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">SWDKLJJ Denda</NBE.Text>
              <NBE.Text color="#000">0</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Bea STNK</NBE.Text>
              <NBE.Text color="#000">60.000</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Bea Plat</NBE.Text>
              <NBE.Text color="#000">100.000</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Jatuh Tempo</NBE.Text>
              <NBE.Text color="#000">14-01-2021</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Masa STNK/PLAT</NBE.Text>
              <NBE.Text color="#000">14-01-2021</NBE.Text>
            </NBE.Box>
          </NBE.HStack>

          <NBE.HStack justifyContent={'space-between'} mt="3">
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Milik Ke</NBE.Text>
              <NBE.Text color="#000">1 (Satu)</NBE.Text>
            </NBE.Box>
            <NBE.Box w="50%">
              <NBE.Text color="gray.600">Keterangan</NBE.Text>
              <NBE.Text color="#000">BELUM LUNAS</NBE.Text>
            </NBE.Box>
          </NBE.HStack>
        </Box>

        <NBE.Box mt="4">
          <NBE.HStack>
            <NBE.Text color="gray.700">*</NBE.Text>
            <NBE.Text color="gray.700" ml="2">
              Hasil penghitungan pajak sesuai jika dilakukan pembayaran hari ini
              juga. Penghitungan pajak tetap mengacu pada hasil dari penetapan
              pajak.
            </NBE.Text>
          </NBE.HStack>
          <NBE.HStack>
            <NBE.Text color="gray.700">*</NBE.Text>
            <NBE.Text color="gray.700" ml="2">
              Pembayaran pajak kendaraan bisa dilakukan 30 hari sebelum tanggal
              jatuh tempo
            </NBE.Text>
          </NBE.HStack>
        </NBE.Box>
      </Container>
    </NBE.ScrollView>
  );
};
