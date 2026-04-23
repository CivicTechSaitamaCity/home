import { spawn } from 'node:child_process';
import { join } from 'node:path';

const nuxtBin =
  process.platform === 'win32'
    ? join(process.cwd(), 'node_modules', '.bin', 'nuxt.cmd')
    : join(process.cwd(), 'node_modules', '.bin', 'nuxt');

const proc = spawn(nuxtBin, ['generate'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  env: process.env,
});

const shouldSkip = (line) => line.includes('Duplicated imports "useAppConfig"');

const pipeFiltered = (stream, writer) => {
  let buffer = '';
  stream.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (!shouldSkip(line)) {
        writer.write(line + '\n');
      }
    }
  });

  stream.on('end', () => {
    if (buffer && !shouldSkip(buffer)) {
      writer.write(buffer + '\n');
    }
  });
};

pipeFiltered(proc.stdout, process.stdout);
pipeFiltered(proc.stderr, process.stderr);

proc.on('close', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
