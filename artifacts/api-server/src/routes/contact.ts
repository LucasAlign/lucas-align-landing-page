import { Router, type IRouter } from "express";
import { db, contactSubmissionsTable } from "@workspace/db";
import { CreateContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = CreateContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values(parsed.data)
    .returning();

  req.log.info({ id: submission.id, source: submission.source }, "Contact submission saved");
  res.status(201).json(submission);
});

export default router;
