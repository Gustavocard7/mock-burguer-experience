import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const sourcePath = resolve("client/src/pages/Home.tsx");
const source = await readFile(sourcePath, "utf8");
const assetBlock = source.match(/const ASSETS = \{([\s\S]*?)\n\};/);

if (!assetBlock) {
  throw new Error("Não foi possível localizar o objeto ASSETS em Home.tsx.");
}

const urls = [...assetBlock[1].matchAll(/"(https:\/\/files\.manuscdn\.com[^\"]+)"/g)].map((match) => match[1]);
const invalidReferences = assetBlock[1].match(/\/(?:manus-storage|assets)\//g) ?? [];

if (urls.length === 0) {
  throw new Error("Nenhuma URL pública de ativo foi encontrada.");
}

if (invalidReferences.length > 0) {
  throw new Error("Foram encontradas referências locais de mídia; use URLs públicas versionadas.");
}

const results = await Promise.all(
  urls.map(async (url) => {
    try {
      const response = await fetch(url, { method: "GET", headers: { Range: "bytes=0-0" } });
      return { url, ok: response.ok, status: response.status };
    } catch (error) {
      return { url, ok: false, status: error.message };
    }
  }),
);

const failures = results.filter((result) => !result.ok);
console.table(results.map(({ url, status, ok }) => ({ asset: url.split("/").at(-1), status, ok })));

if (failures.length > 0) {
  throw new Error(`${failures.length} ativo(s) de produção não respondeu(ram) corretamente.`);
}

console.log(`Auditoria concluída: ${urls.length} ativos públicos disponíveis.`);
