import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      default: '',
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
      default: '',
    },
    role: {
      type: String,
      required: false,
      default: 'USER',
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },

    isVerified: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const userModel = mongoose.model('users', userSchema);
export { userModel };
