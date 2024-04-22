import { useNavigate } from "@tanstack/react-router";
import { useUnit } from "effector-react";
import { FC } from "react";
import { useModalContext } from "../../shared/context/ModalProvider";
import { Button } from "../../shared/ui/Button";

import { $notes, removeNote } from "./store/NoteStore";
import { NoteListItem } from "./ui/NoteListItem";

interface Props {}

export const NotesList: FC<Props> = function NotesList() {
  const navigate = useNavigate();
  const { showModal } = useModalContext();

  const [data, onRemoveNote] = useUnit([$notes, removeNote]);

  const list = data.map((item) => (
    <NoteListItem
      key={item.id.toString()}
      {...item}
      onEdit={() =>
        navigate({
          to: "/notes/edit/$noteId",
          params: { noteId: item.id.toString() },
        })
      }
      onDelete={() => {
        showModal({
          title: "Удаление заметки",
          description: `Вы действительно хотите удалить заметку "${item.title}"`,
          closeButtonText: "Отмена",
          confirmButtonText: "Удалить",
          onConfirm: () => {
            onRemoveNote({ id: item.id });
          },
        });
      }}
    />
  ));

  return (
    <div className="gap-6">
      <Button onClick={() => navigate({ to: "/notes/add" })}>{"+"}</Button>
      <ul className="flex gap-4 flex-wrap">{list}</ul>
    </div>
  );
};
