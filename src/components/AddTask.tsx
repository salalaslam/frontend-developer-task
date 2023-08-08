"use client";

import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
} from "@mui/material";
import { lightBlue, purple } from "@mui/material/colors";
import React from "react";

export const AddTodo = () => {
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.currentTarget);
    const todo = values.get("todo");
    if (typeof todo === "string" && todo.length > 0) {
      console.log("todo", todo);
    }
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          border: "3px solid #000",
          color: "#000",
          boxShadow: 0,
          bgcolor: purple[50],
          ":hover": {
            bgcolor: purple[100],
          },
        }}
        onClick={() => setOpen(true)}
      >
        <AddIcon fontSize="large" />
      </Fab>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            border: "3px solid #000",
            borderRadius: 6,
          },
        }}
      >
        <DialogTitle>Add a new todo</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              gap: 2,
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              type="text"
              name="todo"
              variant="standard"
              placeholder="Todo"
              fullWidth
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{
                border: "2px solid #000",
                borderRadius: 3,
                color: "#000",
                bgcolor: lightBlue[100],
                fontSize: 18,
                padding: 0,
                textTransform: "none",
                ":hover": {
                  border: "2px solid #000",
                  bgcolor: lightBlue[100],
                },
              }}
            >
              Add
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
