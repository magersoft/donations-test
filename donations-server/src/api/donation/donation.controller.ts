import { CreateDonationResponse } from './donation.types';
import { CreateDonationDto } from './dto/create-donation.dto';
import { DonationService } from './donation.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('donate')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  createDonation(
    @Body() createDonationDto: CreateDonationDto,
  ): Promise<CreateDonationResponse> {
    return this.donationService.create(createDonationDto);
  }
}
