import { createFileRoute, redirect } from "@tanstack/react-router";

// Conteúdo herdado da antiga operação Tio Titi; redireciona permanentemente para a página oficial da MALU.
export const Route = createFileRoute("/jogos-para-festa")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
