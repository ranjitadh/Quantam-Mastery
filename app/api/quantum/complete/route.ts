import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { QuantumService, QuantumError } from "@/lib/quantum";
import { z } from "zod";

const completeSchema = z.object({
    quantumId: z.string(),
    reflection: z.string().optional(),
    quizScore: z.number().int().optional(),
});

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const json = await request.json();
        const body = completeSchema.parse(json);

        // Verify access before completion (double check)
        const canAccess = await QuantumService.canAccessQuantum(
            session.user.id,
            body.quantumId
        );

        if (!canAccess) {
            return new NextResponse("You do not have access to complete this Quantum", {
                status: 403,
            });
        }

        const completion = await QuantumService.completeQuantum(
            session.user.id,
            body.quantumId,
            {
                reflection: body.reflection,
                quizScore: body.quizScore,
            }
        );

        return NextResponse.json(completion);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse("Invalid request data", { status: 400 });
        }
        if (error instanceof QuantumError) {
            return new NextResponse(error.message, { status: 400 });
        }
        console.error("Error completing quantum:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
