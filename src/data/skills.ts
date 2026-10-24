import type { SkillGroup } from '../types/skill'
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiArduino,
  SiEspressif,
  SiCplusplus,
  SiGit,
  SiDart,
} from 'react-icons/si'
import { FaBrain, FaMicrochip } from 'react-icons/fa'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'IoT & Hardware',
    items: [
      { name: 'Arduino', icon: SiArduino, color: '#00878F' },
      { name: 'ESP32', icon: SiEspressif, color: '#E7352C' },
      { name: 'C++', icon: SiCplusplus, color: '#659AD2' },
      { name: 'Sensor & Aktuator', icon: FaMicrochip, color: '#34D399' },
    ],
  },
  {
    title: 'Lainnya',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Dart (belajar)', icon: SiDart, color: '#40C4FF' },
      { name: 'RAG / AI', icon: FaBrain, color: '#C084FC' },
    ],
  },
]