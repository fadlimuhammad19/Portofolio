import type { IconType } from 'react-icons'

export type Skill = {
  name: string
  icon: IconType
  color: string
}

export type SkillGroup = {
  title: string
  items: Skill[]
}