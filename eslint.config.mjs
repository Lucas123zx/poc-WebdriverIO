import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ["reports/**/*"],
    // Arquivos ignorados pelo eslint
  },
  // Configurações de ambiente (exemplo: navegador)
  {
    languageOptions: {
      globals: globals.node,  
      // Definir globais específicos para o navegador
    },
  },
  // Regras recomendadas do plugin JS
  pluginJs.configs.recommended,
  // Suas regras personalizadas
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error", // Força o uso de "use strict" globalmente
    },
  },
];
