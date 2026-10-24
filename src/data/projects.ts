import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'SIMRS',
    description: 'Sistem informasi rumah sakit dengan modul lab, BPJS, dan multi-cabang.',
    tech: ['React', 'Express', 'MySQL'],
  },
  {
    id: 2,
    title: 'AI IoT Assistant',
    description: 'Asisten AI yang menganalisis ide proyek IoT lalu memberi daftar komponen dan kode.',
    tech: ['RAG', 'AI', 'IoT'],
  },
  {
    id: 3,
    title: 'Manajemen Kos',
    description: 'Website pengelolaan kos-kosan 3 lantai dengan sekitar 50 kamar.',
    tech: ['Next.js'],
  },
  {
    id: 4,
    title: 'Pemilah Sampah',
    description: 'Alat pemilah sampah basah dan kering dengan sensor dan servo.',
    tech: ['Arduino', 'Sensor', 'C++'],
  },
]