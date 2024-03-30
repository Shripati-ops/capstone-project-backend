import { Injectable, Req, Res } from '@nestjs/common';
import { campaignModel } from './entities/campaign.schema';
import { CampaignDto } from './dto/campaign.dto';
import { Response } from 'express';

@Injectable()
export class CampaignsService {
  async getAllCampaigns(@Req() req: Request, @Res() res: Response) {
    try {
      const allCampaigns = await campaignModel.find();
      res.status(200).send({
        status: 200,
        data: { allCampaigns },
        message: 'Success',
      });
    } catch (err) {
      console.error(err);
    }
  }

  async storeCampaign(
    body: CampaignDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const {
        campaign_name,
        campaign_type,
        start_date,
        end_date,
        budget,
        notes,
        owner,
      } = body;

      campaignModel.create({
        campaign_name,
        campaign_type,
        startDate: start_date,
        endDate: end_date,
        budget,
        notes,
        owner,
      });
      res.status(200).send({
        status: 200,
        data: { message: 'Data Created Successfully' },
        message: 'Success',
      });
    } catch (err) {
      console.error(err);
    }
  }
}
