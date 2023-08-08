import { TodosList } from "@/components/TodosList";
import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { AddTodo } from "../components/AddTask";

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
              title="Pending Todos"
              sx={{
                ".MuiCardHeader-title": {
                  fontWeight: "500",
                },
              }}
            />
            <CardContent>
              <TodosList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <AddTodo />
    </Box>
  );
}
