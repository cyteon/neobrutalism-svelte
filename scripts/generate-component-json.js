import fs from "fs";
import path from "path";

const componentsDir = "src/lib/components/ui";
const outputDir = "static/r";

async function generateComponentJson(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            fs.mkdirSync(path.join(outputDir, file), { recursive: true });

            generateComponentJson(filePath);
        } else if (file.endsWith(".svelte")) {
            const componentName = filePath.replace("src/lib/components/ui/", "").replace(".svelte", "");
            const content = fs.readFileSync(filePath, "utf-8");

            const jsonContent = {
                "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
                name: componentName,
                type: "registry:ui",
                title: componentName.charAt(0).toUpperCase() + componentName.slice(1),
                dependencies: ["class-variance-authority"],
                files: [
                    {
                        target: `${componentName}.svelte`,
                        content,
                        type: "registry:ui"
                    }
                ]
            };

            const outputFilePath = path.join(outputDir, `${componentName}.json`);
            fs.writeFileSync(outputFilePath, JSON.stringify(jsonContent, null, 2));
        }
    });
}

(async () => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    await generateComponentJson(componentsDir);
    console.log("Component JSON files generated successfully.");
})().catch(err => {
    console.error("Error generating component JSON files:", err);
    process.exit(1);
});