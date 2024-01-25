import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.modal';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses: TaskStatus[] = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }
  private isStatusValid(status: any) {
    //search for the index of the status in the allowedStatuses array
    const index = this.allowedStatuses.indexOf(status);
    //if the status is not found, the index will be -1
    return index !== -1;
  }
}
