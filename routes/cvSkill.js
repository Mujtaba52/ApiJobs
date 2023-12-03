const express = require('express')
const cvSkillController = require('../controllers/cvSkills')

const router = express.Router();

router.get('/api/cvSkill/all', cvSkillController.getAllSkill);
router.post('/api/cvSkill/create', cvSkillController.createSkill);
router.put('/api/cvSkill/update', cvSkillController.updateSkill);
router.delete('/api/cvSkill/delete', cvSkillController.deleteSkill);

module.exports = router;
