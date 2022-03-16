import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DonationController } from './donation.controller';
import { DonationService } from './donation.service';
import { Donation, DonationSchema } from './donation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Donation.name, schema: DonationSchema },
    ]),
  ],
  providers: [DonationService],
  controllers: [DonationController],
  exports: [DonationService],
})
export class DonationModule {}
