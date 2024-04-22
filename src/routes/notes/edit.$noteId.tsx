import { createFileRoute } from "@tanstack/react-router";
import { useUnit } from "effector-react";
import { NoteForm } from "../../pages/notes/NoteForm";
import { $notes } from "../../pages/notes/store/NoteStore";
import { Typography } from "../../shared/ui/Typography";

export const Route = createFileRoute("/notes/edit/$noteId")({
  component: NotesFormRoute,
  staticData: {
    title: "Редактировать заметку",
  },
});

function NotesFormRoute() {
  const { noteId } = Route.useParams();

  const data = useUnit($notes);

  const note = data.find((item) => item.id === Number(noteId));

  if (!note)
    return <Typography align={"center"}>{"Заметки не существует"}</Typography>;

  return <NoteForm note={note} />;
}
