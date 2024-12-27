import logger from "../config/winston";
import profileService from "../services/profileService";

const profileController = {
  updateProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const { fullName, gender, phoneNumber } = req.body;
      const rs = await profileService.updateProfile(
        id,
        fullName,
        gender,
        phoneNumber
      );
      res.status(rs.status).json(rs);
    } catch (error) {
      logger.error(error.message);
      res.status(error.status).json(error.message);
    }
  },
  getProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const rs = await profileService.getProfile(id);
      res.status(rs.status).json(rs);
    } catch (error) {
      logger.error(error.message);
      res.status(error.status).json(error.message);
    }
  },
};

export default profileController;
