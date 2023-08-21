import { EStatusTask } from '../enums/statusTask.enum';

export class Task {
  id: number;
  title: string;
  description: string;
  status: EStatusTask;
}
