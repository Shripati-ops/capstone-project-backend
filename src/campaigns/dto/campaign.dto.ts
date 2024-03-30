import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CampaignDto {
  @IsString()
  @IsNotEmpty()
  campaign_name: string;

  @IsString()
  @IsNotEmpty()
  campaign_type: string;

  @IsString()
  @IsNotEmpty()
  start_date: string;

  @IsString()
  @IsNotEmpty()
  end_date: string;

  @IsNumber()
  @IsOptional()
  budget: number;

  @IsString()
  @IsOptional()
  owner: number;

  @IsString()
  @IsOptional()
  notes: number;
}
