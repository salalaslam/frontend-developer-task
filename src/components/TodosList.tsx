"use client";

import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";

export const TodosList = () => {
  const [todos, setTodos] = React.useState<any>([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <List>
      {todos.map((todo: any) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton sx={{ color: "#000" }}>
              <DeleteOutlinedIcon />
            </IconButton>
          }
        >
          <ListItemIcon>
            {!todo.completed ? (
              <CheckBoxOutlineBlankIcon sx={{ color: "#000" }} />
            ) : (
              <CheckIcon
                sx={{
                  bgcolor: "background.default",
                  border: "3px solid #000",
                  borderRadius: 1,
                  color: "#000",
                  boxShadow: "4px 4px 0 0 #000",
                }}
              />
            )}
          </ListItemIcon>
          <ListItemText primary={todo.title} />
        </ListItem>
      ))}
    </List>
  );
};
