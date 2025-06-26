import ButtonCode from "@/components/ui/button.svelte?raw";

export async function GET() {
    return Response.json({
        "$schema": "https://shadcn-svelte.com/schema/registry-item.json",
        name: "button",
        type: "registry:ui",
        title: "Button",
        dependencies: [
            "class-variance-authority",
        ],
        files: [
            {
                target: "button.svelte",
                content: ButtonCode,
                type: "registry:ui",
            }
        ]
    });
}