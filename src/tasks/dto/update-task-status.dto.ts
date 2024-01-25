import { TaskStatus } from '../task.modal';

export class UpdateTaskStatusDto {
  id: string;
  status: TaskStatus;
}
