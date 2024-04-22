import { createEffect, createEvent, createStore } from "effector";
import { AddNoteDTO, Note, UpdateNoteDTO } from "../model/Note";

export const addNote = createEvent<AddNoteDTO>();
export const updateNote = createEvent<UpdateNoteDTO>();
export const removeNote = createEvent<{ id: number }>();

export const setNotesDefaultValue = createEffect<void, Note[]>(async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/83c3fcb1-27bb-4690-9a4a-ccccced0a930"
  ).then((res) => res.json());

  return response;
});

export const $notes = createStore<Note[]>([])
  .on(addNote, (state, dto) => [
    ...state,
    { id: state.length + 1, createDate: new Date(), ...dto },
  ])
  .on(updateNote, (state, dto) =>
    state.map((note) => {
      const { id, ...nestDTO } = dto;

      if (note.id === dto.id) {
        return {
          ...note,
          ...nestDTO,
        };
      }

      return note;
    })
  )
  .on(removeNote, (state, dto) => state.filter((item) => item.id !== dto.id))
  .on(setNotesDefaultValue.doneData, (_, value) => value);
