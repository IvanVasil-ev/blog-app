interface CardPropTypes {
  title: string;
}

const Card = ({ title }: CardPropTypes) => {
  return <div>{title}</div>;
};

export default Card;
