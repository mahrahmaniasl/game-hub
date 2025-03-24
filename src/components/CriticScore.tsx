import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 80 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge borderRadius={3} fontSize="14px" paddingX={3} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
