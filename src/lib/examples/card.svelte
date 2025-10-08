<script lang="ts">
    import Button from "@/components/ui/button.svelte";
    import Input from "@/components/ui/input.svelte";
    import Label from "@/components/ui/label.svelte";

    import { Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle
    } from "@/components/ui/card";
</script>

<Card class="w-full max-w-sm">
    <CardHeader>
    <CardTitle>Login to your account</CardTitle>
    <CardDescription>
        Enter your email below to login to your account
    </CardDescription>
    </CardHeader>
    <CardContent>
    <form>
        <div class="flex flex-col gap-6">
        <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
                id="email"
                type="email"
                placeholder="me@example.com"
                required
            />
        </div>
        <div class="grid gap-2">
            <div class="flex items-center">
            <Label for="password">Password</Label>
            <a
                href="#"
                class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
                Forgot your password?
            </a>
            </div>
            <Input id="password" type="password" required />
        </div>
        </div>
    </form>
    </CardContent>
    <CardFooter class="flex-col gap-2">
    <Button type="submit" class="w-full">
        Login
    </Button>
    <Button variant="neutral" class="w-full">
        Login with Google
    </Button>
    <div class="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" class="underline underline-offset-4">
        Sign up
        </a>
    </div>
    </CardFooter>
</Card>