import { Button, Group } from "@mantine/core";
import { useResizeObserver } from "@mantine/hooks";
import { ChevronRight } from "tabler-icons-react";
import ListItem from "./ListItem";

interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  const MAX_HEIGHT = 20; // Height of <Group />, calculated via the browser
  const [ref, { height }] = useResizeObserver();

  return (
    <div style={{ position: "relative" }}>
      <Group
        ref={ref}
        sx={{
          visibility: height > MAX_HEIGHT ? "hidden" : "visible",
          position: height > MAX_HEIGHT ? "absolute" : "relative",
        }}
      >
        {items.map((market, index) => (
          <ListItem key={index} content={market} />
        ))}
      </Group>

      <Button
        rightIcon={<ChevronRight />}
        variant="outline"
        sx={{
          visibility: height <= MAX_HEIGHT ? "hidden" : "visible",
          position: height <= MAX_HEIGHT ? "absolute" : "relative",
        }}
      >
        Markets
      </Button>
    </div>
  );
};

export default List;
