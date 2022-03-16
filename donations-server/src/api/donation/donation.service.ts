import { CreateDonationResponse } from './donation.types';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Donation, DonationDocument } from './donation.schema';
import { CreateDonationDto } from './dto/create-donation.dto';

@Injectable()
export class DonationService {
  constructor(
    @InjectModel(Donation.name) private donationModel: Model<DonationDocument>,
  ) {}

  async create(
    createDonationDto: CreateDonationDto,
  ): Promise<CreateDonationResponse> {
    try {
      const createdDonation = new this.donationModel(createDonationDto);
      await createdDonation.save();

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }
}
