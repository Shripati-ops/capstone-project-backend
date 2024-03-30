import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  campaign_name: { type: String, required: true },
  campaign_type: {
    type: String,
    required: true,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: {
    type: String,
  },
  budget: { type: Number, required: true },
  owner: { type: 'String', required: true },
  targetAudience: { type: String },
  notes: { type: String },
});
const campaignModel = mongoose.model('campaign', campaignSchema);

export { campaignModel };
