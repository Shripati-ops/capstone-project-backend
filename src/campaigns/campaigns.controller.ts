import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CampaignsGuard } from './campaigns.guard';
import { CampaignsService } from './campaigns.service';
import { CampaignDto } from './dto/campaign.dto';
import { Response } from 'express';

@Controller('campaigns')
export class CampaignsController {
  constructor(private campaignService: CampaignsService) {}
  @UseGuards(CampaignsGuard)
  @Get('get_all_campaigns')
  async getAllCampaigns(@Req() req: Request, @Res() res: Response) {
    return await this.campaignService.getAllCampaigns(req, res);
  }
  @UseGuards(CampaignsGuard)
  @Post('add_campaign')
  async createCampaign(
    @Body() body: CampaignDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return await this.campaignService.storeCampaign(body, req, res);
  }
}
