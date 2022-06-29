export interface ApiResponse<T> {
  data: T;
}

export interface Game {
  id: number;
  name: string;
  intro: string;
  context: string;
  level: number;
  field: Field;
  game_file: GameFile[];
}

export interface Field {
  id: number;
  name: string;
}

export interface FieldAndFile {
  id: number;
  field_id: FieldId;
  file_id: FileId;
}

export interface FieldId {
  name: string;
}

export interface GameFile {
  type: string;
  file_id: FileId;
}

export interface FileId {
  id?: number;
  name: string;
  mime?: string;
  location: string;
}
