import router from '@adonisjs/core/services/router'
import CharactersController from '#controllers/characters_controller'

router.get('/character', [CharactersController, 'index'])
router.get('/character/:id', [CharactersController, 'show'])
router.delete('/character/:id', [CharactersController, 'destroy'])
router.post('/character/', [CharactersController, 'store'])