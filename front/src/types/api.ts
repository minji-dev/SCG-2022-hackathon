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
  game_file : object[];
}

export interface Field {
  id: number;
  name: string;
}

export interface Voice {
  id: number;
  game_id: number;
  file_id: number;
  type: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
