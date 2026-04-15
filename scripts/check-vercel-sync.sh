#!/usr/bin/env bash
set -euo pipefail

branch="$(git branch --show-current)"
remote_url="$(git remote get-url origin 2>/dev/null || true)"

if [[ -z "${remote_url}" ]]; then
  echo "❌ Nenhum remote 'origin' configurado neste repositório."
  echo "   O Vercel só consegue receber mudanças que foram enviadas ao GitHub/GitLab/Bitbucket."
  echo "   Configure um remote e faça push do branch '${branch}'."
  exit 1
fi

if ! git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1; then
  echo "⚠️  O branch '${branch}' não tem upstream configurado."
  echo "   Defina upstream: git push -u origin ${branch}"
  exit 1
fi

upstream="$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}')"
read -r ahead behind < <(git rev-list --left-right --count "${upstream}...HEAD")

echo "Remote origin: ${remote_url}"
echo "Branch atual: ${branch}"
echo "Upstream: ${upstream}"
echo "Commits locais à frente: ${behind}"
echo "Commits remotos à frente: ${ahead}"

if [[ "${behind}" -gt 0 ]]; then
  echo "⚠️  Existem commits locais ainda não enviados. Rode: git push"
  exit 1
fi

echo "✅ Branch sincronizado com o remoto. Se o Vercel não atualizou, verifique:"
echo "   1) branch de produção configurado no Vercel"
echo "   2) integração conectada ao repositório correto"
echo "   3) deploy pausado/falhou no dashboard"
