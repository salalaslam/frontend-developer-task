import {
  Check,
  DeleteOutlined as DeleteOutlinedIcon,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import { AddTask } from "../components/AddTask";

export default function HomePage() {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 6,
              border: "3px solid #000",
            }}
          >
            <CardHeader
              title="Pending Tasks"
              sx={{
                ".MuiCardHeader-title": {
                  fontWeight: "500",
                },
              }}
            />
            <CardContent>
              <List>
                <ListItem
                  secondaryAction={
                    <Box>
                      <DeleteOutlinedIcon />
                    </Box>
                  }
                >
                  <ListItemIcon>
                    <Check
                      sx={{
                        bgcolor: "background.default",
                        border: "3px solid #000",
                        borderRadius: 1,
                        color: "#000",
                        boxShadow: "4px 4px 0 0 #000",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Task 1" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <AddTask />
    </Box>
  );
}
