import { Router } from 'express';
import { deletePainting, getPainting, getPaintings, postPainting, updatePainting } from '../controllers/painting.controller';
import { paintingsValidator } from '../validations/painting.validations';


const router = Router();

router.get('/', getPaintings);
router.get('/:id', getPainting);
router.delete('/:id', deletePainting);
router.post('/', paintingsValidator, postPainting);
router.put('/:id', paintingsValidator, updatePainting);

export default router;

