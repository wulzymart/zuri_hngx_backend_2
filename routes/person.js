import { Router } from 'express';
import { addPerson, deletePerson, editPerson, replacePerson, getPerson } from '../controllers/person.js';
import validate from '../middlewares/requestValidator.js';
const router = Router();
router.route('/').post(addPerson);
router.route('/:user_id').get(validate, getPerson).delete(validate, deletePerson).patch(validate, editPerson).put(validate, replacePerson);
export default router;
