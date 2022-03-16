import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateDonationDto {
  @IsNumber()
  @IsPositive()
  readonly amount: number;

  @IsString()
  readonly currency: string;
}
