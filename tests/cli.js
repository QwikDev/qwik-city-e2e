const { createApp } = require("create-qwik");
const { join } = require("path");
const { spawn } = require("child_process");

async function testCreateQwik(starterId) {
  let name = `my-${starterId}-app`;
  const opts = {
    projectName: `my-${starterId}-app`,
    starterId: starterId,
    outDir: join(__dirname, "..", "dist", name),
  };

  const result = await createApp(opts);
  console.log("created:", result);

  console.log("npm install:", result.outDir);
  const child = spawn("npm", ["install"], { cwd: result.outDir });
  child.on("error", (err) => {
    console.error(`❌ Error executing npm install: ${err}`);
    process.exit(1);
  });

  child.stderr.on("data", (data) => {
    console.log(data.toString());
  });

  child.on("close", (code) => {
    if (code !== 0) {
      console.error(`❌ npm install failed with code ${code}`);
      process.exit(1);
    } else {
      console.log(`npm install completed successfully`);
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
