import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/api/v1/products", { result: "test" });

export default router;
