import type { Milestone } from '../types/milestone'

export const journey: Milestone[] = [
  // ===== PENGALAMAN KERJA =====
  {
    id: 1,
    category: 'pengalaman',
    period: '2025 – Sekarang',
    title: 'Developer Proyek Mandiri',
    place: 'Web & IoT',
    description: 'Mengerjakan sistem informasi, asisten AI, dan alat berbasis sensor.',
  },
  {
    id: 2,
    category: 'pengalaman',
    period: '2023 – Sekarang',
    title: 'Pemilik Toko Listrik',
    place: 'Yoto Electrical Store',
    description: 'Mengelola toko perlengkapan listrik dan membangun situs e-commerce sederhana dengan Vue.js.',
  },

  {
    category: 'pengalaman',
    period: 'September 2024 – Agustus 2025',
    title: 'PT Yamaha Indonesia Motor Manufacturing',
    position: 'Body Assy',
    place: 'Jakarta, Indonesia',
    description: [
      '-Menyiapkan dan Memasang Komponen Pada Sepeda Motor type BLS.',
      '-Mengikuti Alur Konveyor (Conveyor).',
      '-Melakukan Pengecekan Kualitas Mandiri (Quality Control / Build-in Process)).',
      '-Menjaga Keselamatan dan Kebersihan Kerja (K3).',
  
    ]
  },
  {
    category: 'pengalaman',
    period: 'Agustus 2022 – Ocrober 2022',
    title: 'PT Barata Indonesia',
    position: 'PKL',
    place: 'Tegal, Jawa Tengah, Indonesia',
    description: 'Mengerjakan proyek pengembangan software untuk sistem manajemen produksi.',
                  
  },

  // ===== PENDIDIKAN =====
  {
    id: 3,
    category: 'pendidikan',
    period: '2025 – Sekarang',
    title: 'D3 Teknik Komputer',
    place: 'Universitas Harkat Negeri',
    description: 'Mempelajari pemrograman, jaringan, dan sistem tertanam.',
  },
  {
    id: 5,
    category: 'pendidikan',
    period: '2020 – 2023',
    title: 'SMK Jurusan Multimedia',
    place: 'SMK Muhammadiyah 1 Tegal',
    description: 'Mempelajari pemrograman, jaringan, dan sistem informasi.',
  },

  // ===== ORGANISASI =====
  {
    id: 4,
    category: 'organisasi',
    period: '2026 – Sekarang',
    title: 'Wakil Kepala Bidang Komisi IV',
    place: 'Dewan Perwakilan Mahasiswa, Universitas Harkat Negeri',
    details: [
      'Mendampingi Kabid Komisi IV dalam merencanakan, mengarahkan, dan mengawasi program kerja komisi.',
      'Mengoordinasikan anggota agar program berjalan sesuai lini masa yang ditetapkan.',
      'Mewakili Ketua memimpin rapat dan mengambil keputusan mendesak saat Ketua berhalangan.',
      'Membantu menyusun laporan pertanggungjawaban (LPJ) kinerja komisi satu periode.',
    ],
  },
]