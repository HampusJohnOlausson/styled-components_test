import { StyledCard } from "./styles/Card.styled";

export default function Card({item: { id, title, body } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <h1>image</h1>
      </div>
    </StyledCard>
  )
}