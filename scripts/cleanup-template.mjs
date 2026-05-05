#!/usr/bin/env node

import { access, readdir, rm, rmdir } from "node:fs/promises";
import { constants } from "node:fs";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const CLEANUP_TARGETS = [
  "ARCHITECTURE.md",
  "CONTRIBUTING.md",
  "DEVELOPMENT.md",
  "DOCS.md",
  "QUICKSTART.md",
  "START_HERE.md",
];

const hasYesFlag = process.argv.includes("--yes") || process.argv.includes("-y");
const SELF_TARGET = fileURLToPath(new URL(import.meta.url));
const SELF_DIR = dirname(SELF_TARGET);

async function fileExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function askForConfirmation(paths) {
  const rl = readline.createInterface({ input, output });

  output.write("This will delete the following template/demo files:\n");
  for (const filePath of paths) {
    output.write(` - ${filePath}\n`);
  }

  const answer = await rl.question("\nContinue? (y/N): ");
  rl.close();

  return ["y", "yes"].includes(answer.trim().toLowerCase());
}

async function cleanupTemplate() {
  const existingTargets = [];
  for (const target of CLEANUP_TARGETS) {
    if (await fileExists(target)) {
      existingTargets.push(target);
    }
  }

  const deletableTargets = [...existingTargets];
  if (await fileExists(SELF_TARGET)) {
    deletableTargets.push(SELF_TARGET);
  }

  if (deletableTargets.length === 0) {
    output.write("No cleanup targets found. Nothing to delete.\n");
    return;
  }

  const shouldContinue = hasYesFlag || (await askForConfirmation(deletableTargets));
  if (!shouldContinue) {
    output.write("Cleanup canceled.\n");
    return;
  }

  for (const target of deletableTargets) {
    await rm(target, { recursive: true, force: true });
    output.write(`Deleted: ${target}\n`);
  }

  if (await fileExists(SELF_DIR)) {
    const remainingEntries = await readdir(SELF_DIR);
    if (remainingEntries.length === 0) {
      await rmdir(SELF_DIR);
      output.write(`Deleted empty directory: ${SELF_DIR}\n`);
    }
  }

  output.write(
    "\nTemplate cleanup completed.\nRemember to replace README.md and scaffold your own pages.\n",
  );
}

cleanupTemplate().catch((error) => {
  console.error("Cleanup failed:", error);
  process.exit(1);
});
