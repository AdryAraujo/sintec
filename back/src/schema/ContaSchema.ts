import { z } from "zod";

export const createContaSchema = z.object({
    body: z.object({
        nm_uni_consu: z
            .string()
            .min(4, { message: "Descrition must be greater than 4 characters!" }),
    }),
});

export const updateContaSchema = z.object({
    params: z.object({ cd_conta: z.string() }),
    body: z
        .object({
            nm_uni_consu: z
                .string()
                .min(4, { message: "Descrition must be greater than 4 characters!" }),
        })
        .partial(),
});