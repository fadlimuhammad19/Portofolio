type Props = {
  number: string
  title: string
}

export default function SectionTitle({ number, title }: Props) {
  return (
    <h2 className="mb-8 text-3xl font-bold text-white">
      <span className="font-mono text-emerald-400">{number}.</span> {title}
    </h2>
  )
}