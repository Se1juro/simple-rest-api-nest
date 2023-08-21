import { IsEnum, IsString, MinLength } from 'class-validator';
import { EStatusTask } from '../enums/statusTask.enum';

export class TaskValidator {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(5)
  description: string;

  @IsEnum(EStatusTask)
  status: EStatusTask;
}
