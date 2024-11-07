import { UsuarioQuestaoService } from "../services/UsuarioQuestaoService.js";

class UsuarioQuestaoController {
    static async getQuestoesPorUsuario(req, res, next) {
        UsuarioQuestaoService.getQuestoesPorUsuario(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
}

export { UsuarioQuestaoController };
