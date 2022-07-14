import {
  Button,
  Group,
  Paper,
  Popover,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { useResizeObserver } from "@mantine/hooks";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "tabler-icons-react";
import ListItem from "./ListItem";

interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  const MAX_HEIGHT = 20; // Height of <Group />, calculated via the browser
  const ROW_GAP = 16; // Gap between <Stack /> elements, calculated via the browser
  const [ref, { height }] = useResizeObserver();
  const [opened, setOpened] = useState(true);

  return (
    <>
      <Paper sx={{ position: "relative" }}>
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

        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          target={
            <Button
              rightIcon={opened ? <ChevronDown /> : <ChevronRight />}
              onClick={() => setOpened((opened) => !opened)}
              variant="outline"
              sx={{
                visibility: height <= MAX_HEIGHT ? "hidden" : "visible",
                position: height <= MAX_HEIGHT ? "absolute" : "relative",
              }}
            >
              Markets
            </Button>
          }
          position="bottom"
          placement="start"
          sx={{
            visibility: height <= MAX_HEIGHT ? "hidden" : "visible",
            position: height <= MAX_HEIGHT ? "absolute" : "relative",
          }}
        >
          <ScrollArea
            sx={{
              height: items.length > 4 ? 4 * (MAX_HEIGHT + ROW_GAP) : "100%",
            }}
          >
            <Stack align="flex-start">
              {items.map((market, index) => (
                <ListItem key={index} content={market} />
              ))}
            </Stack>
          </ScrollArea>
        </Popover>
      </Paper>
    </>
  );
};

export default List;
