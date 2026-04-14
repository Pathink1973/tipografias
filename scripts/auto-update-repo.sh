#!/usr/bin/env bash
set -euo pipefail

# Atualiza automaticamente o branch atual com o remoto configurado.
# Uso:
#   ./scripts/auto-update-repo.sh
#   ./scripts/auto-update-repo.sh 300  # atualiza a cada 300s

INTERVAL_SECONDS="${1:-0}"

update_once() {
  local branch
  branch="$(git rev-parse --abbrev-ref HEAD)"

  echo "[$(date -Iseconds)] Buscando atualizações para ${branch}..."
  git fetch --prune origin

  # Só tenta pull se branch remoto existir
  if git rev-parse --verify "origin/${branch}" >/dev/null 2>&1; then
    git pull --ff-only origin "${branch}"
  else
    echo "[$(date -Iseconds)] Branch remoto origin/${branch} não encontrado."
  fi
}

if [[ "${INTERVAL_SECONDS}" -le 0 ]]; then
  update_once
  exit 0
fi

while true; do
  update_once
  sleep "${INTERVAL_SECONDS}"
done
