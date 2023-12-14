import { z } from "zod";

export const createUsuarioSchema = z.object({
    body: z.object({
        login_rede: z
            .string()
            .min(1, { message: "Name must be greater than 1 characters!" }),
        nm_usuario: z
            .string()
            .min(4, { message: "Descrition must be greater than 4 characters!" }),
        senha_rede: z
            .string()
            .min(4, { message: "Descrition must be greater than 4 characters!" }),
    }),
});

export const updateUsuarioSchema = z.object({
    params: z.object({ cd_usuario: z.string() }),
    body: z
        .object({
            login_rede: z
                .string()
                .min(1, { message: "Name must be greater than 1 characters!" }),
            nm_usuario: z
                .string()
                .min(4, { message: "Descrition must be greater than 4 characters!" }),
            senha_rede: z
                .string()
                .min(4, { message: "Descrition must be greater than 4 characters!" }),
        })
        .partial(),
});