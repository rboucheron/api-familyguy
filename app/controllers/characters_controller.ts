import type { HttpContext } from '@adonisjs/core/http'
import Character from '#models/character'

export default class CharactersController {
  async index({ response }: HttpContext) {
    const characters = await Character.all()
    return response.ok(characters)
  }

  async show({ params, response }: HttpContext) {
    const characterId = params.id
    const character = await Character.findOrFail(characterId)
    return response.ok(character)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'birth', 'image'])
    const character = await Character.create(data)
    return response.created(character)
  }

  async update({ params, request, response }: HttpContext) {
    const characterId = params.id
    const character = await Character.findOrFail(characterId)

    const data = request.only(['name', 'birth', 'image'])
    character.merge(data)
    await character.save()

    return response.ok(character)
  }

  async destroy({ params, response }: HttpContext) {
    const characterId = params.id
    const character = await Character.findOrFail(characterId)
    await character.delete()

    return response.noContent()
  }
}
