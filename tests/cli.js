const { createApp } = require("create-qwik");
const { join } = require("path");
const { spawn } = require("child_process");

async function testCreateQwik(starterId) {
  let app = `my-${starterId}-app`;
  const opts = {
    projectName: app,
    starterId: starterId,
    outDir: join(__dirname, "..", "dist", app),
  };

  const result = await createApp(opts);
  console.log(app, "created:", result);
  await exec(app, "npm", ["install"], result.outDir);
}

async function exec(app, cmd, args, cwd) {
  console.log(`${app}: ${cmd} ${args.join(" ")} (${cwd})`);

  const child = spawn(cmd, args, { cwd });
  child.on("error", (err) => {
    console.error(`❌ Error executing ${app} ${cmd} ${args.join(" ")}: ${err}`);
    process.exit(1);
  });

  child.stderr.on("data", (data) => {
    console.log(data.toString());
  });

  child.on("close", (code) => {
    if (code !== 0) {
      console.error(
        `❌ ${app}: ${cmd} ${args.join(" ")} failed with code ${code}`
      );
      process.exit(1);
    } else {
      console.log(`${app}: ${cmd} ${args.join(" ")} completed successfully`);
    }
  });
}

async function run() {
  await testCreateQwik("basic");
}

run().catch((e) => {
  console.error("❌ create-qwik error:", e);
  process.exit(1);
});
