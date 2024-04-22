export interface Note {
  id: number;
  title: string;
  description: string;
  createDate: Date;
}

export type AddNoteDTO = Pick<Note, "title" | "description">;
export type UpdateNoteDTO = Partial<AddNoteDTO> & Pick<Note, "id">;
