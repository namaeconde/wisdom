import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// TODO: Fetch this data from google cloud big query
const topics = [
  {
    id: uuid(),
    name: 'Vaccination',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Election',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Sinulog',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Oplan Puyo',
    updatedAt: subHours(Date.now(), 5)
  },
  {
    id: uuid(),
    name: 'Traffic Accidents',
    updatedAt: subHours(Date.now(), 9)
  }
];

export const PublicOpinion = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${topics.length} in total`}
      title="Public Opinion"
    />
    <Divider />
    <List>
      {topics.map((topic, i) => (
        <ListItem
          divider={i < topic.length - 1}
          key={topic.id}
        >
          <ListItemText
            primary={topic.name}
            secondary={`Updated ${formatDistanceToNow(topic.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
