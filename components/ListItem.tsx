import { Badge } from "@mantine/core";

interface ListItemProps {
  content: string;
}

const ListItem = ({ content }: ListItemProps) => {
  return <Badge>{content}</Badge>;
};

export default ListItem;
