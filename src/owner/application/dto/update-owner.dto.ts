import { Optional } from '@nestjs/common';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsPositive, IsString, MaxLength } from 'class-validator';
import { CreateOwnerDto } from './create-owner.dto';

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
  @Optional()
  @IsString()
  name: string;

  @Optional()
  @IsString()
  lastName: string;

  @IsPositive()
  @IsNumber()
  @Optional()
  @MaxLength(3)
  age: number;

  @Optional()
  @IsString()
  city: string;
}
