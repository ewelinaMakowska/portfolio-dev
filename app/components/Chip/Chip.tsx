import styles from './Chip.module.scss'

interface ChipProps {
  text: string
  large?: boolean
}

export default function Chip ({ text, large }: ChipProps) {
  const classes = large 
    ? [styles['chip'], styles['chip--large']].join(' ')
    : [styles['chip']].join(' ')

  return (
    <div className={classes}>
      {text}
    </div>
  )
}
