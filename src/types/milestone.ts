export type MilestoneCategory = 'pengalaman' | 'pendidikan' | 'organisasi'

export type Milestone = {
  id: number
  category: MilestoneCategory
  period: string
  title: string
  position?: string
  place: string
  description?: string
  details?: string[]
}